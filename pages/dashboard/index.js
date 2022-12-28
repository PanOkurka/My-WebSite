import Layout from '../../components/layout'
import ParticlesComponent from '../../components/paticlecomponent'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { useSession, signIn } from "next-auth/react"

export default function Dashboard() {

    const { data: session } = useSession({
        required: true
      })

    if(!session){
        return <button className={`login-btn`} onClick={() => signIn()}>Sign in</button>
    }

    if(session.user.role === "Admin"){
        return (
            <Layout>
               <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
                      <ParticlesComponent />
                            <div className='center'>
                                <h1 className='text-3xl' style={{color: "white"}}>Dashboard</h1>
                                <div className='buttons'>
                                    <Link href='/dashboard/drafts'>
                                        Drafted Posts
                                    </Link>
                                    <Link href='/dashboard/create'>
                                        Create Posts
                                    </Link>
                                </div>
                            </div>
                </motion.div>
            </Layout>
          )
    }

  return(
    <Layout>
        <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
           <ParticlesComponent />
                 <div className='center'>
                     <h1 className='text-2xl'>You don&apos;t have perms for that!</h1>
                 </div>
        </motion.div>
    </Layout>
    )
}