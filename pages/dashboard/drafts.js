/* eslint @next/next/no-img-element: 0 */

import Layout from '../../components/layout'
import ParticlesComponent from '../../components/paticlecomponent'
import { motion } from 'framer-motion'
import Link from 'next/link'
import prisma from '../../lib/prismadb.ts'

import { useSession, signIn, getSession } from "next-auth/react"
import Router from 'next/router'

export const getServerSideProps = async({req, res}) => {
    const session = await getSession({req});
    if(!session){
        res.statusCode = 403
        return { props: {drafts: []}}
    }

    const drafts = await prisma.post.findMany({
        where: {
            author: {
                email: session.user.email
            },
            published: false
        },
        include: {
            author: {
                select: { name: true, image: true}
            }
        }
    })
    return {
        props: { drafts }
    }
}

export default function Dashboard(props) {

    const { data: session } = useSession({
        required: true
      })

    if(!session){
        return <button className={`login-btn`} onClick={() => signIn()}>Sign in</button>
    }

    //console.log(props)

    if(session.user.role === "Admin" || session.user.email === process.env.NEXT_PUBLIC_SUPER_ADMIN){
        return (
            <Layout>
               <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
                      <ParticlesComponent />
                            <div className='center-main DraftsPage flex flex-col justify-center align-middle'>
                                <div className='Box'>
                                    <h1 className='text-white text-2xl mb-4 font-bold'>
                                        {props.drafts.lenght !== 0? "My Drafts": "No Drafts"}
                                    </h1>

                                    <div className='Drafts gap-3'>
                                        {props.drafts.map((post) => (
                                            <button key={post.id} onClick={() => Router.push("/blog/[id]", `/blog/${post.id}`)}>
                                                <div className='Post'>
                                                    <h1 className='text-xl font-bold'>{post.title}</h1>
                                                    <div className='mt-4 text' dangerouslySetInnerHTML={{ __html: post.content }}></div>
                                                    <div className='infos'>
                                                        <img src={post.author.image} alt={post.author.name} />
                                                        <p className='ml-4'>{post.author.name}</p>
                                                        <p className='ml-4'>{post.createdAt.toLocaleDateString()}</p>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
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