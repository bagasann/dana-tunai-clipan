
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, FileText, Settings, LogOut } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const router = useRouter()
    const supabase = createClient()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push("/admin/login")
        router.refresh()
    }

    const navigation = [
        { name: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Pengajuan", href: "/admin/dashboard/applications", icon: FileText },
        { name: "Users", href: "/admin/dashboard/users", icon: Users },
        { name: "CMS", href: "/admin/dashboard/cms", icon: Settings },
    ]

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Admin Sidebar */}
            <aside className="w-64 bg-gray-900 text-white min-h-screen">
                <div className="flex items-center justify-center h-16 border-b border-gray-800">
                    <span className="text-xl font-bold">Admin Portal</span>
                </div>
                <nav className="p-4 space-y-1">
                    {navigation.map((item) => {
                        const isActive = pathname.startsWith(item.href) && (item.href !== "/admin/dashboard" || pathname === "/admin/dashboard")
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
                                    isActive
                                        ? "bg-gray-800 text-white"
                                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                )}
                            >
                                <item.icon className="mr-3 h-5 w-5" />
                                {item.name}
                            </Link>
                        )
                    })}
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center px-4 py-2 text-sm font-medium rounded-md text-red-400 hover:bg-gray-800 transition-colors mt-8"
                    >
                        <LogOut className="mr-3 h-5 w-5" />
                        Keluar
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    )
}
