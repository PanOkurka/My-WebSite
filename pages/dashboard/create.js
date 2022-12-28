import Layout from '../../components/layout'
import ParticlesComponent from '../../components/paticlecomponent'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { useSession, signIn } from "next-auth/react"
import { useState } from 'react'
import Router from 'next/router'

export default function CreatePost() {

    const { data: session } = useSession({
        required: true
      })

    if(!session){
        return <button className={`login-btn`} onClick={() => signIn()}>Sign in</button>
    }


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const submitPost = async (e) => {
        e.preventDefault();
        try{
            const body = {title, content};
            await fetch(`/api/post`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            await Router.push('/dashboard/drafts');
        } catch (err) {
            console.log(err);
        }
    }

    if(session.user.role === "Admin"){
        return (
            <Layout>
               <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
                      <ParticlesComponent />
                            <div className='center CreatePost'>
                                <div className='Box'>
                                    <h1 className='text-2xl mb-4'>Create a Post</h1>
                                    <div className='mt-2'>
                                        <textarea autofocus placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} rows={1} cols={30} />
                                    </div>
                                    <div className='mt-3'>
                                        <textarea placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} rows={8} cols={50} />
                                    </div>
                                    <button className='btn mt-4' onClick={submitPost}>Submit</button>
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