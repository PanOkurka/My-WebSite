import '../styles/global.css'
import '../styles/main.css'
import '../styles/tailwind.css'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    )
  }