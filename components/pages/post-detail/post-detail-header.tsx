import { Button } from "@/components/ui/button"
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export default function PostDetailHeader() {
  return (
    <nav className="sticky top-0 z-20 border-b bg-background px-2 py-2">
      <Button variant={"ghost"} className={"group"}>
        <HugeiconsIcon
          icon={ArrowLeft01Icon}
          size={20}
          className="group-hover:text-primary"
        />
        Home
      </Button>
    </nav>
  )
}
