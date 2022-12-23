import '../styles/global.css'
import '../styles/main.css'
import '../styles/tailwind.css'
import { AnimatePresence } from 'framer-motion'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps }, router }) {
    return (
      <SessionProvider session={session}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </SessionProvider>
    )
  }