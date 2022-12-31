/* eslint @next/next/no-img-element: 0 */

import Layout from '../../../components/layout'
import ParticlesComponent from '../../../components/paticlecomponent'
import { motion } from 'framer-motion'

import { useSession, signIn } from "next-auth/react"
import prisma from '../../../lib/prismadb.ts'
import { useState } from 'react'
import  Router  from 'next/router'

export const getServerSideProps = async ({params}) => {
    const user = await prisma.user.findUnique({
        where: {
            id: params?.id || -1,
        }
    })
    return {
        props: user
    }
}

export default function Profile(props) {

    const [role, setRole] = useState('')

    const submitEdit = async (e) => {
        e.preventDefault();
        try{
            const body = {role};
            await fetch(`/api/users/${props.id}`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            await Router.push('/dashboard/users');
        } catch (err) {
            console.log(err);
        }
    }

    const { data: session } = useSession({
      required: true
    })

    if(!session){
        return <button className={`login-btn`} onClick={() => signIn()}>Sign in</button>
    }

  if(session.user.role === "Admin" || session.user.email === process.env.SUPER_ADMIN){
    return (
        <Layout>
           <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
                  <ParticlesComponent />
                        <div className='center'>
                            <div className='Profile-Box'>
                                <h1 className='text-white text-lg mt-2 font-bold'>User Edit</h1>
                              <div className='Top'>
                                <img src={props.image} alt={props.name} />
                                <h1 className='text-3xl'>{props.name}</h1>
                              </div>
                              <div className='Bottom gap-2'>
                                <h2 className='text-xl'>Email</h2>
                                <p className='text-lg'>{props.email}</p>
                                <h2 className='text-xl'>Role</h2>
                                <p className='text-lg'>{props.role}</p>
                                <select defaultValue={'DEFAULT'} name="Role" id='Role' onChange={(e) => setRole(e.target.value)}>
                                    <option value="DEFAULT"disabled hidden>Choose role for update</option>
                                    <option value='User'>User</option>
                                    <option value='Mod'>Moderator</option>
                                    <option value='Admin'>Admin</option>
                                </select>
                                <button onClick={submitEdit} className='text-white inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium Btn'>
                                    Submit Role
                                </button>
                              </div>
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