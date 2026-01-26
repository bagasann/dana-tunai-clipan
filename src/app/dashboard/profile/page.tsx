
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"

export default function ProfilePage() {
    const supabase = createClient()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const getUser = async () => {
            // Mock data for testing if not connected
            const { data: { user } } = await supabase.auth.getUser()

            if (user) {
                setUser(user)
            } else if (document.cookie.includes("mock_session=true")) {
                setUser({ email: "test@example.com", user_metadata: { full_name: "Test User", phone: "08123456789" } })
            }
            setLoading(false)
        }
        getUser()
    }, [supabase])

    if (loading) return <div>Loading...</div>

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Profil Saya</h1>

            <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
                <div>
                    <Label>Email</Label>
                    <Input value={user?.email || ""} disabled />
                </div>
                <div>
                    <Label>Nama Lengkap</Label>
                    <Input value={user?.user_metadata?.full_name || ""} disabled />
                </div>
                <div>
                    <Label>Nomor Telepon</Label>
                    <Input value={user?.user_metadata?.phone || ""} disabled />
                </div>

                <div className="pt-4">
                    <Button variant="outline">Edit Profil (Coming Soon)</Button>
                </div>
            </div>
        </div>
    )
}
