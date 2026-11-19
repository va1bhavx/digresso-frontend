import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  ArrowExpand01Icon,
  Bookmark01Icon,
  Chatting01Icon,
  EllipsisIcon,
  Share03Icon,
  UserGroup03Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import PostComment from "./post-comments"
import { Input } from "@/components/ui/input"

export default function PostDetailContent() {
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
      <div>
        <div className="sticky top-0 z-20 w-full px-4 py-4">
          <div className="relative">
            <Avatar className={"absolute top-2 left-2"}>
              <AvatarFallback>VK</AvatarFallback>
            </Avatar>
            <Input
              className="min-h-12 rounded-full bg-primary-foreground! pl-12"
              placeholder="What's your reply?"
            />
            <Button
              variant={"ghost"}
              size={"sm"}
              className={"absolute top-2 right-2"}
            >
              <HugeiconsIcon icon={ArrowExpand01Icon} />
            </Button>
          </div>
        </div>
        <PostComment />
      </div>
    </section>
  )
}
