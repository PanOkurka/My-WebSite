import Layout from '../components/layout'
import { FaGithub, FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa'
import Typing from '../components/typing'
import { motion } from 'framer-motion'
import ParticlesComponent from '../components/paticlecomponent'
import { Suspense } from 'react'
import Router from 'next/router';
import { User } from '@nextui-org/react'

import prisma from '../lib/prismadb'

export const getServerSideProps = async() => {

  const feed = await prisma.post.findMany({
      where: {
          published: true
      },
      include: {
          author: {
              select: { name: true, image: true, role: true}
          }
      },
      orderBy: { createdAt: 'desc' },
      take: 1,
  })
  return {
      props: { feed }
  }
}


export default function NewHome(props) {

  return (
    <Layout>
      <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
        <ParticlesComponent />
        <div className='w-full h-screen xl:grid flex flex-col xl:grid-cols-8 grid-flow-row grid-cols-1 gap-4 xl:grid-rows-5 grid-rows-6 xl:px-10 md:px-24 md:py-10 md:ml-0 px-12 ml-10 content-center'>
          <div className='row-start-2 xl:col-start-2 xl:col-span-2 flex justify-center items-center'>
            <div className='bg-[#18181B] w-[250px] h-[250px] z-50 flex items-center justify-center rounded-full shadow-md shadow-black'>
              <img alt='PanOkurka' src='/images/profile.gif' className='rounded-full w-[230px] h-[230px]' />
            </div>
          </div>
          <div className='row-start-3 xl:col-start-2 z-50 xl:row-span-3 col-span-2 xl:mt-10'>
            <div className='bg-[#18181B] flex flex-col py-2 items-center rounded-full shadow-md shadow-black'>
              <h1 className='text-[#7289DA] text-2xl'>Pan_Okurka</h1>
              <h2 className='text-white'>I code in <Typing/></h2>
            </div>

            <div className='bg-[#18181B] flex py-2 justify-center items-center rounded-full shadow-md shadow-black mt-10'>
              <a href='https://github.com/PanOkurka' className='socialiconlist'>
                <FaGithub className='githubIcon' />
              </a>
              <a href='https://twitter.com/Pan_Okurka' className='socialiconlist'>
                <FaTwitter className='twitterIcon'/>
              </a>
              <a href='https://www.instagram.com/panokurka_official/' className='socialiconlist'>
                <FaInstagram className='instagramIcon' />
              </a>
              <a href='https://discord.gg/wn5aF2w' className='socialiconlist'>
                <FaDiscord className='discordIcon' />
              </a>
            </div>

            <div className='bg-[#18181B] flex flex-col py-2 items-center rounded-full shadow-md shadow-black mt-10'>
              <a href="https://www.buymeacoffee.com/panokurka" 
                rel="noreferrer" style={{width: "217px", height: "60px"}} 
                target="_blank">
                  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" 
                        alt="Buy Me A Coffee" 
                        style={{height: '60px !important',width: '217px !important'}} />
              </a>
            </div>
          </div>
          <div className='xl:row-start-1 xl:col-start-4 row-span-2 xl:mt-0 mt-5 xl:col-span-5 row-start-4 flex items-center justify-center z-50'>
            <div className='bg-[#18181B] xl:w-3/4 w-full h-full flex flex-col py-2 px-2 rounded-xl shadow-md shadow-black'>
              <div className='w-full h-1/6 flex items-center border-b-2 border-white'>
                <h2 className='text-xl text-white'>Latest post:</h2>
              </div>
              <div className='h-5/6 w-full text-left'>
                <Suspense>
                  {props.feed.map((post) => (
                    <button className='w-full mt-4 px-4' key={post.id} onClick={() => Router.push("/blog/[id]", `/blog/${post.id}`)}>
                      <div className='w-full px-1 py-2 text-left text-white'>
                        <h1 className='text-xl font-bold border-b-2 border-gray-400 my-[0.4vh]'>{post.title}</h1>
                        <div className='mt-4 border-b-2 border-gray-400 my-[0.4vh] overflow-hidden text-ellipsis Cuttext' dangerouslySetInnerHTML={{ __html: post.content }}></div>
                        <div className='flex mt-4 items-center justify-start'>
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
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
          <div className='xl:row-start-3 xl:col-start-4 row-span-3 z-50 col-span-5 flex justify-center items-center'>
            <div className='bg-[#18181B] xl:w-4/5 w-full xl:h-[90%] h-full md:mb-0 mb-4 px-4 flex flex-col rounded-xl shadow-md shadow-black'>
              <div className='h-full w-full md:grid flex grid-cols-2 grid-rows-2 flex-col gap-2 py-4'>
                  <a className='w-full h-full flex justify-center items-center' href='https://atropol.eu'>
                    <img src='/images/projects/Atropol.png' className='h-full rounded-lg duration-150 hover:scale-[1.2] border-4 border-black' />
                  </a>
                  <a className='w-full h-full flex justify-center items-center' href='https://dash.atropol.eu'>
                    <img src='/images/projects/Atropol-Dash.png' className='h-full rounded-lg duration-150 hover:scale-[1.2] border-4 border-black' />
                  </a>
                  <div className='w-full h-full flex justify-center items-center'>
                    <img src='/images/projects/Dragonex.jpg' className='h-full rounded-lg duration-150 hover:scale-[1.2] border-4 border-black' />
                  </div>
                  <div className='w-full h-full flex justify-center items-center'>
                    <img src='/images/projects/OkurkaCraftSite.png' className='h-full rounded-lg duration-150 hover:scale-[1.2] border-4 border-black' />
                  </div>
              </div>
            </div>
          </div>
        </div>      
      </motion.div>
    </Layout>
  )
}