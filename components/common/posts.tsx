import { HugeiconsIcon } from "@hugeicons/react"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"
import {
  Bookmark01Icon,
  Chatting01Icon,
  EllipsisIcon,
  Share03Icon,
  UserGroup03Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "../ui/button"

export default function Posts() {
  return (
    <section className="flex flex-col">
      <div className="flex gap-3 border-b px-4 py-4 hover:bg-secondary">
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
              <h1 className="font-sans text-lg tracking-tight">
                Will AI make learning to program less valuable?
              </h1>
              <p className="text-sm text-muted-foreground">
                People keep saying syntax no longer matters. Is understanding
                code still worth the effort for beginners?
              </p>
            </div>

            <div className="min-h-12 border-l border-primary px-2">
              <div className="space-y-2 text-xs">
                <div className="flex w-full items-center justify-between">
                  <span>Thomas Shelby:</span>
                  <Badge variant={"link"}>Disagree</Badge>
                </div>
                <p className="text-muted-foreground">
                  When the tool is wrong, you need enough understanding to
                  notice. Less practice means fewer people who can spot a
                  confident mistake.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="group flex max-w-fit cursor-pointer items-center gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-secondary">
                <HugeiconsIcon
                  icon={Chatting01Icon}
                  size={20}
                  className="group-hover:text-primary"
                />{" "}
                <span className="text-xs group-hover:text-primary">
                  5 Conversations
                </span>
              </div>

              <div className="group flex max-w-fit cursor-pointer items-center gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-secondary">
                <HugeiconsIcon
                  icon={UserGroup03Icon}
                  size={20}
                  className="group-hover:text-primary"
                />{" "}
                <span className="text-xs group-hover:text-primary">
                  5 People
                </span>
              </div>

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
      </div>
      <div className="flex gap-3 border-b px-4 py-4 hover:bg-secondary">
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
              <h1 className="font-sans text-lg tracking-tight">
                Will AI make learning to program less valuable?
              </h1>
              <p className="text-sm text-muted-foreground">
                People keep saying syntax no longer matters. Is understanding
                code still worth the effort for beginners?
              </p>
            </div>

            {/*<div className="min-h-12 border-l border-primary px-2">
              <div className="space-y-2 text-xs">
                <div className="flex w-full items-center justify-between">
                  <span>Thomas Shelby:</span>
                  <Badge variant={"link"}>Disagree</Badge>
                </div>
                <p className="text-muted-foreground">
                  When the tool is wrong, you need enough understanding to
                  notice. Less practice means fewer people who can spot a
                  confident mistake.
                </p>
              </div>
            </div>*/}

            <div className="flex items-center">
              <div className="group flex max-w-fit cursor-pointer items-center gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-secondary">
                <HugeiconsIcon
                  icon={Chatting01Icon}
                  size={20}
                  className="group-hover:text-primary"
                />{" "}
                <span className="text-xs group-hover:text-primary">
                  5 Conversations
                </span>
              </div>

              <div className="group flex max-w-fit cursor-pointer items-center gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-secondary">
                <HugeiconsIcon
                  icon={UserGroup03Icon}
                  size={20}
                  className="group-hover:text-primary"
                />{" "}
                <span className="text-xs group-hover:text-primary">
                  5 People
                </span>
              </div>

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
      </div>
    </section>
  )
}
