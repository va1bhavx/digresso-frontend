import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PostComment() {
  return (
    <Tabs defaultValue="relevant" className={"w-full py-4"}>
      <TabsList
        variant="line"
        className={"flex w-full items-center justify-center border-b"}
      >
        <TabsTrigger value="relevant">Relevant</TabsTrigger>
        <TabsTrigger value="newest">Newest</TabsTrigger>
        <TabsTrigger value="oldest">Oldest</TabsTrigger>
      </TabsList>

      <TabsContent value={"relevant"} className={""}>
        {/*<Posts />*/}
      </TabsContent>
    </Tabs>
  )
}
