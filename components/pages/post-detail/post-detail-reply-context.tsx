"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

type ReplyTarget = {
  username: string
}

type PostDetailReplyContextValue = {
  replyTarget: ReplyTarget | null
  startReply: (username: string) => void
  cancelReply: () => void
}

const PostDetailReplyContext =
  createContext<PostDetailReplyContextValue | null>(null)

export function PostDetailReplyProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [replyTarget, setReplyTarget] = useState<ReplyTarget | null>(null)

  const startReply = useCallback((username: string) => {
    setReplyTarget({ username })
  }, [])

  const cancelReply = useCallback(() => {
    setReplyTarget(null)
  }, [])

  const value = useMemo(
    () => ({
      replyTarget,
      startReply,
      cancelReply,
    }),
    [replyTarget, startReply, cancelReply]
  )

  return (
    <PostDetailReplyContext.Provider value={value}>
      {children}
    </PostDetailReplyContext.Provider>
  )
}

export function usePostDetailReply() {
  const context = useContext(PostDetailReplyContext)

  if (!context) {
    throw new Error(
      "usePostDetailReply must be used within PostDetailReplyProvider"
    )
  }

  return context
}
