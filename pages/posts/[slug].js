import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import ParticlesComponent from '../../components/paticlecomponent'
import { motion } from 'framer-motion'

import { getAllPosts, getAuthorBySlug, getPostBySlug } from '../../lib/api'

export default function Post({ post }) {
  const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  return (
    <Layout>
    <ParticlesComponent/>
    <motion.div className="text-white absolute w-full left-0 flex flex-col items-center content-center mt-10" exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
      <div className='f-post'>
        <h1 className='text-3xl'>{post.title}</h1>

        <div className='mt-4'>
          <div className='inline-flex items-center'>
          <Image alt={post.author.name} src={post.author.profilePictureUrl} className="f-img-border" height="80" width="80" />
            <strong>
              <Link href={post.author.permalink}>
                <a className='text-xl pl-2 hover:no-underline'>{post.author.name}</a>
              </Link>
            </strong>
          </div>
          <div className='mt-2'>
            <time dateTime={post.createdAt}>Posted at {prettyDate}</time>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.body }} className='mt-2 pt-3 border-t' />

        <div className='mt-3 pt-3 border-t'>
          <Link href='/forum'>
            <a className='hover:no-underline'>← Go Back</a>
          </Link>
        </div>
      </div>
    </motion.div>
    </Layout>
  )
}

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const author = getAuthorBySlug(post.author)

  return {
    props: {
      post: {
        ...post,
        author,
      },
    },
  }
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPosts().map(post => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}