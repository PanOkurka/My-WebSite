import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'PanOkurka'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/profile.png" />
        <meta
          name="description"
          content="Pan_Okurka's website!"
        />
        <meta name="og:title" content={siteTitle} />
        <title>Pan_Okurka</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}