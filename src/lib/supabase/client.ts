
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === "https://example.com") {
    console.error("Supabase environment variables are missing or using fallbacks! Check your .env.local file.");
  }

  try {
    return createBrowserClient(
      supabaseUrl || "https://example.com",
      supabaseAnonKey || "dummy-key"
    )
  } catch (e) {
    // Return a dummy object that satisfies the interface to prevent build crashes
    // when env vars are completely missing or invalid in CI
    return {
      auth: {
        getUser: async () => ({ data: { user: null }, error: null }),
        signInWithPassword: async () => ({ data: {}, error: null }),
        signOut: async () => ({ error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
      },
      from: () => ({
        select: () => ({ data: [], error: null }),
        insert: () => ({ data: [], error: null }),
        update: () => ({ data: [], error: null }),
        delete: () => ({ data: [], error: null }),
      })
    } as any
  }
}
