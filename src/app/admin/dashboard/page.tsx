
import { Users, FileText, CircleCheck, Clock } from "lucide-react"

export default function AdminDashboardPage() {
    // Mock stats
    const stats = [
        { name: 'Total Pengajuan', value: '12', icon: FileText, color: 'bg-blue-500' },
        { name: 'Pending Review', value: '4', icon: Clock, color: 'bg-yellow-500' },
        { name: 'Disetujui', value: '8', icon: CircleCheck, color: 'bg-green-500' },
        { name: 'Total User', value: '24', icon: Users, color: 'bg-purple-500' },
    ]

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                    <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className={`flex-shrink-0 rounded-md p-3 ${item.color}`}>
                                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                                    <dd className="text-lg font-medium text-gray-900">{item.value}</dd>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900">Pengajuan Terbaru</h2>
                <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                        {/* Mock list item */}
                        {[1, 2, 3].map((i) => (
                            <li key={i}>
                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-primary truncate">Ahmad Junaedi - Toyota Avanza</p>
                                        <div className="ml-2 flex-shrink-0 flex">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                Pending
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                        <div className="sm:flex">
                                            <p className="flex items-center text-sm text-gray-500">
                                                Rp 50.000.000
                                            </p>
                                        </div>
                                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                            <p>Dikirim pada 26 Jan 2026</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
