import Layout from '../components/layout'
import ParticlesComponent from '../components/paticlecomponent'
import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

import { getAllPosts, getAuthorBySlug, getAllAuthors } from '../lib/api'

export default function Posts({ posts, authors }) {
  return (
    <Layout>
    <ParticlesComponent/>
    <motion.div className="posts text-white absolute w-full left-0 flex flex-col items-center content-center mt-10" exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
      <aside className='absolute left-0 ml-14 w-1/3 lg:ml-8 AsideAuthor'>
        <h2 className='text-2xl mb-3'>Authors</h2>
        {authors.map(author => (
          <div key={author.slug} className='Autor-Row'>
            <h2 className='mb-4'>
              <Link href={author.permalink}>
                <a className='text-xl'>{author.name}</a>
              </Link>
            </h2>

            <Image alt={author.name} src={author.profilePictureUrl} className="f-authors-img" height="140" width="80" />

            <p className='mt-4'>{author.posts.length} post(s)</p>

            <Link href={author.permalink}>
              <a>Go to profile →</a>
            </Link>
          </div>
        ))}
      </aside>

      {posts.map(post => {
        const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        })

        return (
          <article key={post.slug} className="forum-post">
            <h2>
              <Link href={post.permalink}>
                <a className="text-2xl f-head hover:no-underline">{post.title}</a>
              </Link>
            </h2>

            <p className='mt-2 text-lg'>{post.excerpt}</p>

            <div className='inline-flex mt-3 items-center'>
              <Image alt={post.author.name} src={post.author.profilePictureUrl} className='f-img-border' height="40" width="40" />

              <div className='pl-2'>
                <strong>{post.author.name}</strong>
                <time dateTime={post.createdAt} className='pl-3'>{prettyDate}</time>
              </div>
            </div>

            <Link href={post.permalink}>
              <a className='mt-3'>Read more →</a>
            </Link>
          </article>
        )
      }).reverse()}
    </motion.div>
    </Layout>
  )
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts().map(post => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),

      authors: getAllAuthors().map(author => ({
        ...author,
        posts: getAllPosts().filter(post => post.author === author.slug),
      })),
    }
  }
}