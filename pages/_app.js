import '../styles/global.css'
import '../styles/main.css'
import '../styles/tailwind.css'
import { AnimatePresence } from 'framer-motion'
import { SessionProvider } from "next-auth/react"

import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps: { session, ...pageProps }, router }) {
    return (
      <NextUIProvider>
        <SessionProvider session={session}>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </SessionProvider>
      </NextUIProvider>
    )
  }