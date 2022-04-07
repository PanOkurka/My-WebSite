import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import ParticlesComponent from '../../components/paticlecomponent'
import { motion } from 'framer-motion'

import { getAllAuthors, getAllPosts, getAuthorBySlug } from '../../lib/api'

export default function Author({ author }) {
  return (
    <Layout>
      <ParticlesComponent/>
      <motion.div className="text-white absolute w-full left-0 flex flex-col items-center content-center text-center mt-10" exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
        <div className='AuthorPage'>
          <h1 className='text-2xl border-b pb-2 mb-3'>{author.name}</h1>

          <div>
            <Image alt={author.name} src={author.profilePictureUrl} className="f-img-border" height="120" width="120" />
          </div>

          <h2 className='text-2xl mt-4 border-b pb-1 mb-2'>Posts</h2>

          <ul>
            {author.posts.map(post => (
              <li key={post.slug}>
                <Link href={post.permalink}>
                  <a className='hover:no-underline'>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Layout>
  )
}

export function getStaticProps({ params }) {
  const author = getAuthorBySlug(params.slug)

  return {
    props: {
      author: {
        ...author,
        posts: getAllPosts().filter(post => post.author === author.slug),
      },
    },
  }
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllAuthors().map(author => ({
      params: {
        slug: author.slug,
      }
    }))
  }
}