import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"

const TRENDING_NOW = [
  {
    id: 1,
    title: "Is the internet making us more informed or more confused?",
    no_of_contributions: 15,
    category: "Technology",
  },
  {
    id: 2,
    title: "Will AI make learning to program less valuable?",
    no_of_contributions: 7,
    category: "Technology",
  },
  {
    id: 3,
    title: "Is being busy becoming an excuse for poor productivity?",
    category: "Career",
    no_of_contributions: 5,
  },
  {
    id: 4,
    title: "What does society treat as normal that you find strange?",
    no_of_contributions: 8,
    category: "Society",
  },

  {
    id: 5,
    title: "Can people genuinely change their personalities?",
    no_of_contributions: 120,
    category: "Psychology",
  },
]

export default function RightSidebar() {
  return (
    <aside className="hidden w-74 shrink-0 px-4 py-3 lg:block">
      <div className="sticky top-6 space-y-4">
        <section>
          <Input
            placeholder="Search conversations"
            className="h-12 rounded-full! pl-4"
          />
        </section>
        <section>
          <Card className="border-0 bg-transparent pb-0 ring-0">
            <CardHeader>
              <CardTitle>Trending now</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pb-0!">
              <div className="flex flex-col">
                {TRENDING_NOW.map((trending) => (
                  <div
                    className="group flex flex-col gap-2 px-4 py-2 hover:cursor-pointer hover:bg-popover"
                    key={trending.id}
                  >
                    <div>
                      <span className="text-xs tracking-tight text-muted-foreground group-hover:text-primary">
                        {trending.category}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h1>{trending.title}</h1>
                      <p className="text-xs tracking-tight text-muted-foreground">
                        {trending.no_of_contributions} Contributions
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </aside>
  )
}
