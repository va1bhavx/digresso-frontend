import { Button } from "@/components/ui/button"
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export default function PostDetailHeader() {
  return (
    <nav className="border-b px-2 py-4">
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
