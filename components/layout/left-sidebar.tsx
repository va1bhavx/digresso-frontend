"use client"

import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"
import { SIDEBAR_LINKS } from "@/data/nav-links"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Button } from "../ui/button"
import { PencilIcon } from "@hugeicons/core-free-icons"

export default function LeftSidebar() {
  const pathname = usePathname()
  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh w-60 shrink-0 border-r border-border px-1 md:flex"
    >
      <SidebarHeader className="">
        <Link href="/" className="flex items-center overflow-hidden">
          <Image
            src="/digresso.png"
            alt="Digresso"
            width={50}
            height={50}
            priority
            className="shrink-0 object-contain"
          />

          <div className="flex min-w-0 flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-xl font-bold tracking-tight text-primary">
              Digresso<span className="text-primary">.</span>
            </span>
            <span className="text-[11px] text-muted-foreground">
              Think beyond the feed.
            </span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-3 py-4">
        <SidebarGroup className="p-0">
          <SidebarMenu className="gap-2">
            {SIDEBAR_LINKS.map((link) => {
              const isActive =
                pathname === link.url ||
                (link.url !== "/" && pathname.startsWith(`${link.url}/`))

              return (
                <SidebarMenuItem key={link.id}>
                  <SidebarMenuButton
                    isActive={isActive}
                    tooltip={link.title}
                    className="h-10 rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:font-semibold data-[active=true]:text-accent-foreground"
                    render={<Link href={link.url} />}
                  >
                    <div className="flex items-center gap-4">
                      <HugeiconsIcon
                        icon={link.icon}
                        size={19}
                        strokeWidth={1.8}
                        className="shrink-0"
                      />
                      <span>{link.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <div className="pb-3">
        <Button size={"lg"} className={"w-full"}>
          <HugeiconsIcon
            icon={PencilIcon}
            size={19}
            strokeWidth={1.8}
            className="shrink-0"
          />
          Start a conversation
        </Button>
      </div>
      <SidebarFooter className="border-t p-3">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>VK</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-sm tracking-tight">Vaibhav Kumar</h1>
            <p className="text-xs tracking-tighter text-muted-foreground">
              @theceo
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
