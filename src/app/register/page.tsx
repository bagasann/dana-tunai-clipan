
"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const supabase = createClient()

    // Mock Register Function
    const handleMockRegister = () => {
        document.cookie = "mock_session=true; path=/";
        router.push("/dashboard")
        router.refresh()
    }

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        // Bypass for testing
        if (email === "test@example.com") {
            handleMockRegister();
            return;
        }

        let signUpError;
        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                        phone: phone,
                    },
                },
            })
            signUpError = error;
        } catch (err) {
            console.error("Signup error:", err);
            setError("Gagal terhubung ke server. Pastikan konfigurasi Supabase benar.");
            setLoading(false);
            return;
        }

        if (signUpError) {
            setError(signUpError.message)
            setLoading(false)
            return
        }

        // Create user profile record if sign up successful
        // Note: Ideally this is handled by a Supabase Trigger, but for now we rely on Auth metadata 
        // or trigger. Detailed trigger logic is in schema.sql but we can also insert here if needed.
        // For this implementation, we assume the trigger handles it or we rely on the implementation plan.

        router.push("/dashboard")
        router.refresh()
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Daftar Akun BaruStart
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Sudah punya akun?{" "}
                        <Link href="/login" className="font-medium text-primary hover:text-primary/80">
                            Masuk disini
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleRegister}>
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="full-name">Nama Lengkap</Label>
                            <Input
                                id="full-name"
                                name="fullName"
                                type="text"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Nama Lengkap"
                            />
                        </div>
                        <div>
                            <Label htmlFor="phone">Nomor Telepon/WhatsApp</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="08123456789"
                            />
                        </div>
                        <div>
                            <Label htmlFor="email-address">Email Address</Label>
                            <Input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email@example.com"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="********"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center">{error}</div>
                    )}

                    <div>
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? "Memproses..." : "Daftar"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
