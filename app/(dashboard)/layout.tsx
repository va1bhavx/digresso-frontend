import LeftSidebar from "@/components/layout/left-sidebar"
import MobileDock from "@/components/layout/mobile-dock"
import RightSidebar from "@/components/layout/right-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="mx-auto flex min-h-screen w-full max-w-6xl justify-center">
        <LeftSidebar />

        <main className="min-w-0 flex-1 border-r py-6 pb-28 md:pb-6">
          {children}
        </main>
        <RightSidebar />
      </div>
      <MobileDock />
    </SidebarProvider>
  )
}
