import { HugeiconsIcon } from "@hugeicons/react"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import {
  Bookmark01Icon,
  Chatting01Icon,
  EllipsisIcon,
  Share03Icon,
  UserGroup03Icon,
} from "@hugeicons/core-free-icons"
import Link from "next/link"

interface PostCardProps {
  likedOpinion: boolean
}

export default function PostCard({ likedOpinion }: PostCardProps) {
  return (
    <Link
      href={"/posts/2"}
      className="flex cursor-pointer gap-3 border-b px-4 py-4 last:border-b-0"
    >
      <div>
        <Avatar size="lg">
          <AvatarFallback>VK</AvatarFallback>
        </Avatar>
      </div>
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-xs tracking-tight">Dev Raman</h1>
            <p className="text-xs text-muted-foreground">@dev</p>
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-2">
            <h1 className="text-xs tracking-tight text-muted-foreground">
              6d ago
            </h1>
            <p className="text-xs text-primary">Technology</p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="font-sans text-lg tracking-tight group-hover:underline">
              Will AI make learning to program less valuable?
            </h1>
            <p className="text-sm text-muted-foreground">
              People keep saying syntax no longer matters. Is understanding code
              still worth the effort for beginners?
            </p>
          </div>

          {likedOpinion && (
            <div className="min-h-12 border-l border-primary px-2">
              <div className="space-y-2 text-xs">
                <div className="flex w-full items-center justify-between">
                  <span className="font-medium tracking-tight">
                    Thomas Shelby:
                  </span>
                  <Badge variant={"link"}>Disagree</Badge>
                </div>
                <p className="text-muted-foreground">
                  When the tool is wrong, you need enough understanding to
                  notice. Less practice means fewer people who can spot a
                  confident mistake.
                </p>
              </div>
            </div>
          )}

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
      </div>
    </Link>
  )
}
