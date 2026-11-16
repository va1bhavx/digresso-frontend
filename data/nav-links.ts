import type { IconSvgElement } from "@hugeicons/react"

import {
  Bookmark02Icon,
  GlobalSearchIcon,
  Home11FreeIcons,
  Notification01Icon,
  RepairIcon,
  User03Icon,
} from "@hugeicons/core-free-icons"

interface SidebarLink {
  id: string
  title: string
  url: string
  icon: IconSvgElement
  disabled?: boolean
}

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    id: "home",
    title: "Home",
    url: "/home",
    icon: Home11FreeIcons,
  },
  {
    id: "explore",
    title: "Explore",
    url: "/explore",
    icon: GlobalSearchIcon,
  },
  {
    id: "activity",
    title: "Activity",
    url: "/activity",
    icon: Notification01Icon,
  },
  {
    id: "bookmarks",
    title: "Bookmarks",
    url: "/bookmarks",
    icon: Bookmark02Icon,
  },

  {
    id: "profile",
    title: "My Profile",
    url: "/profile",
    icon: User03Icon,
  },
  {
    id: "settings",
    title: "Settings",
    url: "/settings",
    icon: RepairIcon,
  },
]
