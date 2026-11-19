"use client"

import { SIDEBAR_LINKS } from "@/data/nav-links"
import { cn } from "cn"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MobileDock() {
  const pathname = usePathname()
  const isPostDetail = pathname.startsWith("/posts/")

  if (isPostDetail) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-2 md:hidden">
      <nav
        aria-label="Primary"
        className="pointer-events-auto flex w-full max-w-md items-center justify-between gap-1 rounded-[1.75rem] border border-white/20 bg-background/70 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)] ring-1 ring-black/5 backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/55 dark:border-white/10 dark:ring-white/5"
      >
        {SIDEBAR_LINKS.map((link) => {
          const isActive =
            pathname === link.url ||
            (link.url !== "/" && pathname.startsWith(`${link.url}/`))

          return (
            <Link
              key={link.id}
              href={link.url}
              aria-label={link.title}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group relative flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 transition-all duration-200 ease-out active:scale-95",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "absolute inset-x-1 inset-y-0.5 -z-10 rounded-2xl transition-all duration-200",
                  isActive
                    ? "bg-primary/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                    : "bg-transparent group-hover:bg-accent/60 group-active:bg-accent"
                )}
              />
              <HugeiconsIcon
                icon={link.icon}
                size={22}
                strokeWidth={isActive ? 2.2 : 1.8}
                className={cn(
                  "shrink-0 transition-transform duration-200",
                  isActive ? "scale-105" : "group-active:scale-95"
                )}
              />
              <span
                className={cn(
                  "max-w-full truncate text-[10px] font-medium leading-none tracking-tight transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.title}
              </span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
