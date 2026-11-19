"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  EllipsisIcon,
  ReplyIcon,
  ThumbsUpIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"

export default function PostReplies() {
  const [isReplyHidden, setIsReplyHidden] = useState<boolean>(false)

  const toggleReplyShowUI = () => {
    setIsReplyHidden((prev: boolean) => !prev)
  }

  return (
    <section className="border-b px-4 py-3">
      <div className="flex items-start gap-3">
        <div>
          <Avatar>
            <AvatarFallback>VK</AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="font-medium tracking-tight">Tomás Ibarra</h1>
            <div className="flex items-center gap-2">
              <span className="text-xs tracking-tight text-muted-foreground">
                @tomas
              </span>
              <Separator orientation="vertical" />

              <span className="text-xs tracking-tight text-muted-foreground">
                8d ago
              </span>
              <Separator orientation="vertical" />

              <Badge variant={"destructive"}>Disagree</Badge>
            </div>
          </div>
          <div className="space-y-3">
            <p>
              When the tool is wrong, you need enough understanding to notice.
              Less practice means fewer people who can spot a confident mistake.
            </p>

            <div>
              <Button variant={"ghost"} size={"sm"}>
                <HugeiconsIcon icon={ThumbsUpIcon} />
                21
              </Button>

              <Button variant={"ghost"} size={"sm"} onClick={toggleReplyShowUI}>
                <HugeiconsIcon icon={ReplyIcon} />
                Reply
              </Button>
              <Button variant={"ghost"} size={"sm"}>
                <HugeiconsIcon icon={EllipsisIcon} />
              </Button>
            </div>

            {isReplyHidden && (
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2 border-b px-2">
                  <div>
                    <Avatar>
                      <AvatarFallback>SU</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h1 className="font-medium tracking-tight">
                        Someone unknown
                      </h1>
                      <div className="flex items-center gap-2">
                        <span className="text-xs tracking-tight text-muted-foreground">
                          @tomas
                        </span>
                        <Separator orientation="vertical" />

                        <span className="text-xs tracking-tight text-muted-foreground">
                          8d ago
                        </span>
                        <Separator orientation="vertical" />

                        <Badge variant={"destructive"}>Disagree</Badge>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p>
                        When the tool is wrong, you need enough understanding to
                        notice. Less practice means fewer people who can spot a
                        confident mistake.
                      </p>

                      <div>
                        <Button variant={"ghost"} size={"sm"}>
                          <HugeiconsIcon icon={ThumbsUpIcon} />
                          21
                        </Button>

                        <Button variant={"ghost"} size={"sm"}>
                          <HugeiconsIcon icon={ReplyIcon} />
                          Reply
                        </Button>
                        <Button variant={"ghost"} size={"sm"}>
                          <HugeiconsIcon icon={EllipsisIcon} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 px-2">
                  <div>
                    <Avatar>
                      <AvatarFallback>SU</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h1 className="font-medium tracking-tight">
                        Someone unknown
                      </h1>
                      <div className="flex items-center gap-2">
                        <span className="text-xs tracking-tight text-muted-foreground">
                          @tomas
                        </span>
                        <Separator orientation="vertical" />

                        <span className="text-xs tracking-tight text-muted-foreground">
                          8d ago
                        </span>
                        <Separator orientation="vertical" />

                        <Badge variant={"destructive"}>Disagree</Badge>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p>
                        When the tool is wrong, you need enough understanding to
                        notice. Less practice means fewer people who can spot a
                        confident mistake.
                      </p>

                      <div>
                        <Button variant={"ghost"} size={"sm"}>
                          <HugeiconsIcon icon={ThumbsUpIcon} />
                          21
                        </Button>

                        <Button variant={"ghost"} size={"sm"}>
                          <HugeiconsIcon icon={ReplyIcon} />
                          Reply
                        </Button>
                        <Button variant={"ghost"} size={"sm"}>
                          <HugeiconsIcon icon={EllipsisIcon} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
