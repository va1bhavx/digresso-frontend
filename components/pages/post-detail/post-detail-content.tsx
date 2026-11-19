"use client"

import { useState } from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowExpand01Icon,
  Bookmark01Icon,
  Chatting01Icon,
  EllipsisIcon,
  Share03Icon,
  UserGroup03Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "cn"
import PostComment from "./post-comments"

export default function PostDetailContent() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [comment, setComment] = useState("")

  return (
    <section className="relative">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <Avatar size="lg">
            <AvatarFallback>VK</AvatarFallback>
          </Avatar>
          <div className="w-fit">
            <h1>Dev Raman</h1>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <p>@dev</p>
              <Separator orientation="vertical" />
              <p>8d ago</p>
            </div>
          </div>
        </div>
        <Badge variant={"link"}>Technology</Badge>
      </div>
      <div className="space-y-2 border-b px-4 py-2">
        <h1 className="text-xl">
          Will AI make learning to program less valuable?
        </h1>
        <p className="text-md text-muted-foreground">
          People keep saying syntax no longer matters. Is understanding code
          still worth the effort for beginners?
        </p>
        <p className="text-md text-muted-foreground">
          People keep saying syntax no longer matters. Is understanding code
          still worth the effort for beginners? People keep saying syntax no
          longer matters. Is understanding code still worth the effort for
          beginners? People keep saying syntax no longer matters. Is
          understanding code still worth the effort for beginners? People keep
          saying syntax no longer matters. Is understanding code still worth the
          effort for beginners? People keep saying syntax no longer matters. Is
          understanding code still worth the effort for beginners? People keep
          saying syntax no longer matters. Is understanding code still worth the
          effort for beginners?
        </p>
      </div>
      <div className="flex items-center justify-between border-b px-2 py-2">
        <div className="flex items-center">
          <Button variant={"ghost"} className={"group"}>
            <HugeiconsIcon
              icon={Chatting01Icon}
              size={20}
              className="group-hover:text-primary"
            />{" "}
            <span className="text-xs group-hover:text-primary">
              5 Conversations
            </span>
          </Button>

          <Button variant={"ghost"} className={"group"}>
            <HugeiconsIcon
              icon={UserGroup03Icon}
              size={20}
              className="group-hover:text-primary"
            />{" "}
            <span className="text-xs group-hover:text-primary">5 People</span>
          </Button>
        </div>

        <div>
          <Button variant={"ghost"} size={"icon-sm"} className={"group"}>
            <HugeiconsIcon
              icon={Bookmark01Icon}
              size={20}
              className="group-hover:text-primary"
            />
          </Button>

          <Button variant={"ghost"} size={"icon-sm"} className={"group"}>
            <HugeiconsIcon
              icon={Share03Icon}
              size={20}
              className="group-hover:text-primary"
            />
          </Button>

          <Button variant={"ghost"} size={"icon-sm"} className={"group"}>
            <HugeiconsIcon
              icon={EllipsisIcon}
              size={20}
              className="group-hover:text-primary"
            />
          </Button>
        </div>
      </div>

      <div className="">
        <PostComment />
      </div>

      <div className="sticky bottom-0 z-30 px-2 pb-[max(env(safe-area-inset-bottom),0.25rem)]">
        <div className="rounded-2xl border border-border bg-background/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/85">
          <div
            className={cn(
              "flex gap-3 rounded-xl bg-muted/20 p-2 transition-[min-height] duration-200",
              isExpanded ? "items-end" : "items-end"
            )}
          >
            <Avatar className="mb-1 shrink-0">
              <AvatarFallback>VK</AvatarFallback>
            </Avatar>

            <div className="flex min-w-0 flex-1 items-end gap-2">
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="What's your reply?"
                rows={isExpanded ? 8 : 1}
                className={cn(
                  "resize-none border-0 bg-transparent px-1 py-2 shadow-none transition-all focus-visible:ring-0 dark:bg-transparent",
                  isExpanded
                    ? "max-h-[45vh] min-h-[10rem]"
                    : "max-h-32 min-h-10 py-2.5"
                )}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label={
                  isExpanded ? "Collapse comment box" : "Expand comment box"
                }
                aria-expanded={isExpanded}
                className="mb-1 shrink-0"
                onClick={() => setIsExpanded((v) => !v)}
              >
                <HugeiconsIcon
                  icon={ArrowExpand01Icon}
                  className={cn(
                    "transition-transform duration-200",
                    isExpanded && "rotate-180"
                  )}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
