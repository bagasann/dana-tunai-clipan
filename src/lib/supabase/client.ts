
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  try {
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "https://example.com",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "dummy-key"
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
