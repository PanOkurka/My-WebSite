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
        <div className='flex flex-wrap w-1/2 flex-row items-center AuthorList'>
          {authors.map(author => (
            <div key={author.slug} className='Autor-List text-center'>
              <h2 className='pb-2 mb-2 border-b'>
                <Link href={author.permalink}>
                  <a className='text-2xl hover:no-underline'>{author.name}</a>
                </Link>
              </h2>

              <div>
                <Image alt={author.name} src={author.profilePictureUrl} className='f-img-border' height="80" width="80" />
              </div>

              <p className='mt-3'>{author.posts.length} post(s)</p>

              <Link href={author.permalink}>
                <a className='hover:no-underline'>Go to profile →</a>
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