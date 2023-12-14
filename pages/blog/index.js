/* eslint @next/next/no-img-element: 0 */
import Layout from '../../components/layout'
import ParticlesComponent from '../../components/paticlecomponent'
import { motion } from 'framer-motion'
import Router from 'next/router'
import prisma from '../../lib/prismadb.ts'
import { Suspense } from 'react'
import {User} from '@nextui-org/react'

export const getServerSideProps = async() => {

    const feed = await prisma.post.findMany({
        where: {
            published: true
        },
        include: {
            author: {
                select: { name: true, image: true, role: true}
            }
        }
    })
    return {
        props: { feed }
    }
}

export default function Blog(props) {
  return (
    <Layout>
       <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
              <ParticlesComponent />
                    <div className='center-main BlogPage'>
                        <div className='Box'>
                                    <h1 className='text-white text-2xl mb-4 font-bold'>
                                        Blog
                                    </h1>
                                    <Suspense>
                                    <div className='Drafts gap-3 mb-4'>
                                        {props.feed.map((post) => (
                                            <button key={post.id} onClick={() => Router.push("/blog/[id]", `/blog/${post.id}`)}>
                                                <div className='Post'>
                                                    <h1 className='text-xl font-bold'>{post.title}</h1>
                                                    <div className='mt-4 text' dangerouslySetInnerHTML={{ __html: post.content }}></div>
                                                    <div className='infos'>
                                                        <User 
                                                            name={post.author.name}
                                                            description={post.author.role}
                                                            avatarProps={{
                                                                src: post.author.image
                                                              }}
                                                        />
                                                        <p className='ml-4' suppressHydrationWarning>{post.createdAt.toLocaleDateString()}</p>
                                                    </div>
                                                </div>
                                            </button>
                                        )).reverse()}
                                    </div>
                                    </Suspense>
                                </div>
                    </div>
        </motion.div>
    </Layout>
  )
}