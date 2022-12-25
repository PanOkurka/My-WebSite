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
                    <div className='center'>
                        <div className='Profile-Box'>
                          <div className='Top'>
                            <img src={session.user.image} alt={session.user.name} />
                            <h1 className='text-3xl'>{session.user.name}</h1>
                          </div>
                          <div className='Bottom gap-2'>
                            <h2 className='text-xl'>Email</h2>
                            <p className='text-lg'>{session.user.email}</p>
                            <h2 className='text-xl'>Role</h2>
                            <p className='text-lg'>{session.user.role}</p>
                          </div>
                        </div>
                    </div>
        </motion.div>
    </Layout>
  )
}