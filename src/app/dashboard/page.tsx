
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CirclePlus, Clock, CircleCheck, CircleX } from "lucide-react"

export default function DashboardPage() {
    // In a real app, we would fetch the user's application status from Supabase here.
    // For the prototype, we'll assume no application exists yet or mock it.
    const hasApplication = false
    const applicationStatus: string = "pending" // pending, approved, rejected

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>

            {!hasApplication ? (
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center py-12">
                    <div className="flex justify-center mb-4">
                        <CirclePlus className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Belum ada pengajuan</h3>
                    <p className="mt-1 text-gray-500">Ajukan pinjaman dana tunai Anda sekarang juga.</p>
                    <div className="mt-6">
                        <Link href="/dashboard/apply">
                            <Button>Ajukan Sekarang</Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Status Pengajuan</h3>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-md">
                        {applicationStatus === "pending" && <Clock className="h-8 w-8 text-yellow-500" />}
                        {applicationStatus === "approved" && <CircleCheck className="h-8 w-8 text-green-500" />}
                        {applicationStatus === "rejected" && <CircleX className="h-8 w-8 text-red-500" />}

                        <div>
                            <p className="font-medium text-gray-900 capitalize">{applicationStatus}</p>
                            <p className="text-sm text-gray-500">
                                {applicationStatus === "pending" && "Pengajuan Anda sedang ditinjau oleh tim kami."}
                                {applicationStatus === "approved" && "Selamat! Pengajuan Anda telah disetujui."}
                                {applicationStatus === "rejected" && "Mohon maaf, pengajuan Anda belum dapat disetujui."}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
