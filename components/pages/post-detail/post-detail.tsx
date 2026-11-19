import PostDetailContent from "./post-detail-content"
import PostDetailHeader from "./post-detail-header"
import { PostDetailReplyProvider } from "./post-detail-reply-context"

export default function PostDetails() {
  return (
    <PostDetailReplyProvider>
      <section className="relative">
        <PostDetailHeader />
        <PostDetailContent />
      </section>
    </PostDetailReplyProvider>
  )
}
