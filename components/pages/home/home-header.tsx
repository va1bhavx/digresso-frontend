import Posts from "@/components/common/posts"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomeHeader() {
  return (
    <>
      <Tabs defaultValue="overview" className={"w-full py-4"}>
        <TabsList
          variant="line"
          className={"flex w-full items-center justify-center border-b"}
        >
          <TabsTrigger value="for-you">For you</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="continuing">Continuing</TabsTrigger>
        </TabsList>
        <div className="flex min-h-18 cursor-pointer items-center gap-4 border-b px-4 py-2 hover:bg-popover">
          <Avatar size="lg">
            <AvatarFallback>VK</AvatarFallback>
          </Avatar>
          <p className="text-sm text-muted-foreground">
            Start a conversation worth having...
          </p>
        </div>
        <TabsContent value={"for-you"} className={""}>
          <Posts />
        </TabsContent>
      </Tabs>
    </>
  )
}
