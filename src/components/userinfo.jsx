"use client"

import { useSession } from "next-auth/react";

export default function Userinfo() {
  const { data: session, status } = useSession()

  if (status === "loading") return <p>Loading...</p>
  if (!session) return <p>User not logged in</p>

  return (
    <div>
      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
    </div>
  )
}
