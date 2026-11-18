import PostCard from "./post-card"

export default function Posts() {
  return (
    <section className="flex flex-col">
      <PostCard likedOpinion={true} />
      <PostCard likedOpinion={true} />
      <PostCard likedOpinion={false} />
      <PostCard likedOpinion={true} />
      <PostCard likedOpinion={false} />
      <PostCard likedOpinion={false} />
    </section>
  )
}
