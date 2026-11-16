import LeftSidebar from "@/components/layout/left-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="mx-auto flex min-h-screen w-full max-w-5xl justify-center">
        <LeftSidebar />

        <main className="min-w-0 flex-1 border-r border-border px-4 py-6 lg:border-x">
          {children}
        </main>

        <aside className="hidden w-64 shrink-0 px-4 py-6 lg:block">
          <div className="sticky top-6 space-y-4">
            <section className="rounded-xl border border-border bg-card p-4">
              <h2 className="text-sm font-semibold">Right sidebar</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Placeholder content and layout structure.
              </p>
            </section>
            <section className="rounded-xl border border-border bg-card p-4">
              <h3 className="text-sm font-medium">More</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Add widgets or links here later.
              </p>
            </section>
          </div>
        </aside>
      </div>
    </SidebarProvider>
  )
}
