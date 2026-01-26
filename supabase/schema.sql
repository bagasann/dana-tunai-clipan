-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create Users table (extends Supabase Auth)
create table public.users (
  id uuid references auth.users not null primary key,
  full_name text,
  phone text,
  role text default 'user' check (role in ('user', 'admin')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.users enable row level security;

-- Create Applications table
create table public.applications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) not null,
  status text default 'pending' check (status in ('pending', 'processing', 'approved', 'rejected', 'reviewing')),
  loan_amount numeric,
  tenure integer,
  vehicle_brand text,
  vehicle_year text,
  vehicle_model text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.applications enable row level security;

-- Create Documents table
create table public.documents (
  id uuid default uuid_generate_v4() primary key,
  application_id uuid references public.applications(id) on delete cascade not null,
  type text check (type in ('ktp', 'stnk', 'bpkb', 'other')),
  url text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.documents enable row level security;

-- Policies (Basic)
create policy "Users can view their own profile" on public.users
  for select using (auth.uid() = id);

create policy "Users can update their own profile" on public.users
  for update using (auth.uid() = id);

create policy "Users can view their own applications" on public.applications
  for select using (auth.uid() = user_id);

create policy "Users can insert their own applications" on public.applications
  for insert with check (auth.uid() = user_id);

create policy "Users can view their own documents" on public.documents
  for select using (
    exists (
      select 1 from public.applications
      where applications.id = documents.application_id
      and applications.user_id = auth.uid()
    )
  );

create policy "Users can insert their own documents" on public.documents
  for insert with check (
    exists (
      select 1 from public.applications
      where applications.id = documents.application_id
      and applications.user_id = auth.uid()
    )
  );
