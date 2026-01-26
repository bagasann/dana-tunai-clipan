
"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function ApplyPage() {
    const router = useRouter()
    const supabase = createClient()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const [formData, setFormData] = useState({
        loanAmount: "",
        tenure: "12",
        fullName: "",
        phone: "",
        address: "",
        vehicleBrand: "",
        vehicleModel: "",
        vehicleYear: "",
    })

    // In a real app, we would handle file uploads to Storage.
    // For this prototype, we'll just capture the input but not upload effectively without storage buckets setup.

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            setError("User not authenticated")
            setLoading(false)
            return
        }

        // Insert application data
        const { error: insertError } = await supabase
            .from("applications")
            .insert({
                user_id: user.id,
                loan_amount: parseFloat(formData.loanAmount),
                tenure: parseInt(formData.tenure),
                vehicle_brand: formData.vehicleBrand,
                vehicle_model: formData.vehicleModel,
                vehicle_year: formData.vehicleYear,
                status: "pending"
            })

        if (insertError) {
            setError(insertError.message)
            setLoading(false)
            return
        }

        // Handle documents upload (mocked logic or implementation if storage bucket exists)
        // We would need to create a bucket "documents" in Supabase manually or via migration.

        router.push("/dashboard")
        router.refresh()
    }

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Form Pengajuan Dana Tunai</h2>
                <p className="mt-1 text-sm text-gray-500">
                    Lengkapi data diri dan kendaraan Anda untuk mengajukan pinjaman.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm border">

                {/* Loan Details */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Detail Pinjaman</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="loanAmount">Jumlah Pengajuan (Rp)</Label>
                            <Input
                                id="loanAmount"
                                name="loanAmount"
                                type="number"
                                placeholder="Contoh: 50000000"
                                required
                                value={formData.loanAmount}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="tenure">Tenor (Bulan)</Label>
                            <select
                                id="tenure"
                                name="tenure"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                required
                                value={formData.tenure}
                                onChange={handleInputChange}
                            >
                                <option value="12">12 Bulan</option>
                                <option value="24">24 Bulan</option>
                                <option value="36">36 Bulan</option>
                                <option value="48">48 Bulan</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Personal Details */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Data Diri</h3>
                    <div>
                        <Label htmlFor="fullName">Nama Lengkap (sesuai KTP)</Label>
                        <Input
                            id="fullName"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <Label htmlFor="phone">Nomor Telepon/WA</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <Label htmlFor="address">Alamat Lengkap</Label>
                        <Input
                            id="address"
                            name="address"
                            required
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Vehicle Details */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Data Kendaraan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <Label htmlFor="vehicleBrand">Merk</Label>
                            <Input
                                id="vehicleBrand"
                                name="vehicleBrand"
                                placeholder="Contoh: Toyota"
                                required
                                value={formData.vehicleBrand}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="vehicleModel">Tipe / Model</Label>
                            <Input
                                id="vehicleModel"
                                name="vehicleModel"
                                placeholder="Contoh: Avanza G 2018"
                                required
                                value={formData.vehicleModel}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="vehicleYear">Tahun</Label>
                            <Input
                                id="vehicleYear"
                                name="vehicleYear"
                                type="number"
                                placeholder="2018"
                                required
                                value={formData.vehicleYear}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Document Uploads (Mock UI) */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Upload Dokumen</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="doc-ktp">Foto KTP</Label>
                            <Input id="doc-ktp" type="file" accept="image/*" />
                        </div>
                        <div>
                            <Label htmlFor="doc-stnk">Foto STNK</Label>
                            <Input id="doc-stnk" type="file" accept="image/*" />
                        </div>
                        <div>
                            <Label htmlFor="doc-bpkb">Foto BPKB (jika ada)</Label>
                            <Input id="doc-bpkb" type="file" accept="image/*" />
                        </div>
                    </div>
                    <p className="text-xs text-gray-500">*Pastikan foto jelas dan dapat dibaca.</p>
                </div>

                {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                )}

                <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                        {loading ? "Mengirim..." : "Kirim Pengajuan"}
                    </Button>
                </div>

            </form>
        </div>
    )
}
