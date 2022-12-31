import { useSession, signIn, signOut } from "next-auth/react"
import { CgProfile } from 'react-icons/cg'
import { GoDashboard } from 'react-icons/go'
import Link from "next/link"


export default function LgnBtn({state}) {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className={`border-t-2 border-solid border-gray-500 mt-2 pt-2`}>
                <Link href="/profile">
                  <a className={`flex items-center p-2 text-base font-normal rounded-lg text-white hoverNavItem ${!state && "justify-center"}`}>
                     <CgProfile className={`text-3xl duration-75 text-gray-400`}></CgProfile>
                     <span className={`ml-10 absolute CustomTextSide duration-150 ${!state && "hidden scale-0 duration-75"}`}>Profile</span>
                  </a>
               </Link>
               {session.user.role === "Admin" || session.user.email === process.env.NEXT_PUBLIC_SUPER_ADMIN &&
                    <Link href="/dashboard">
                    <a className={`flex items-center p-2 text-base font-normal rounded-lg text-white hoverNavItem ${!state && "justify-center"}`}>
                      <GoDashboard className={`text-3xl duration-75 text-gray-400`}></GoDashboard>
                      <span className={`ml-10 absolute CustomTextSide duration-150 ${!state && "hidden scale-0 duration-75"}`}>Dashboard</span>
                    </a>
                </Link>
              }
        <button className={`logout-btn ${!state && "hidden"}`} onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <>
      <button className={`login-btn ${!state && "hidden"}`} onClick={() => signIn()}>Sign in</button>
    </>
  )
}