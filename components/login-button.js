import { useSession, signIn, signOut } from "next-auth/react"
export default function LgnBtn({state}) {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <div className={`${!state && "hidden"}`} style={{color: "white", marginLeft: "1vh"}}>Sign in as {session.user.name}</div>
        <button className={`logout-btn ${!state && "hidden"}`} onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button className={`login-btn ${!state && "hidden"}`} onClick={() => signIn()}>Sign in</button>
    </>
  )
}