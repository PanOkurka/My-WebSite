import Layout from '../../components/layout'
import ParticlesComponent from '../../components/paticlecomponent'
import { motion } from 'framer-motion'

import { useSession, signIn } from "next-auth/react"

export default function Profile() {

    const { data: session } = useSession({
      required: true
    })

    if(!session){
        return <button className={`login-btn`} onClick={() => signIn()}>Sign in</button>
    }

    console.log(session)

  return (
    <Layout>
       <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
              <ParticlesComponent />
                    <div style={{marginTop: "10vh", display: "flex", alignItems: "center", textAlign: "left", position: "absolute", left: "0", width: "100%", justifyContent: "center", justifyItems: "center"}}>
                        <div className='Profile-Box'>
                          <div className='Top'>
                            <img src={session.user.image} alt={session.user.name} />
                            <h1>{session.user.name}</h1>
                          </div>
                          <div className='Bottom'>
                            <h2>Email</h2>
                            <p>{session.user.email}</p>
                            <h2>Role</h2>
                            <p>{session.user.role}</p>
                          </div>
                        </div>
                    </div>
        </motion.div>
    </Layout>
  )
}