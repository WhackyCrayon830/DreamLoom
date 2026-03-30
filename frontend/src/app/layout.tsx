import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TitleBar } from "@/components/layout/titlebar"

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex flex-col h-full w-full">

        <TitleBar/>
        <div className="flex flex-1 overflow-hidden min-h-0">
          <AppSidebar/>
        </div>

      </div>
    </SidebarProvider>
  )
}