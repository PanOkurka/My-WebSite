import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import ParticlesComponent from '../../components/paticlecomponent'
import { motion } from 'framer-motion'

import { getAllAuthors, getAllPosts } from '../../lib/api'

export default function Authors({ authors }) {
  return (
    <Layout>
      <ParticlesComponent/>
      <motion.div className="text-white absolute w-full left-0 flex flex-col items-center content-center mt-14" exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
        <div className='flex flex-wrap w-1/2 flex-row items-center content-center'>
          {authors.map(author => (
            <div key={author.slug}>
              <h2>
                <Link href={author.permalink}>
                  <a>{author.name}</a>
                </Link>
              </h2>

              <Image alt={author.name} src={author.profilePictureUrl} height="80" width="80" />

              <p>{author.posts.length} post(s)</p>

              <Link href={author.permalink}>
                <a>Go to profile →</a>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </Layout>
  )
}

export function getStaticProps() {
  return {
    props: {
      authors: getAllAuthors().map(author => ({
        ...author,
        posts: getAllPosts().filter(post => post.author === author.slug),
      })),
    }
  }
}