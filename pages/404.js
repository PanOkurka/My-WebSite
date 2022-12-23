import Layout from '../components/layout'
import ParticlesComponent from '../components/paticlecomponent'
import { motion } from 'framer-motion'

export default function Custom404() {
  return (
    <Layout>
       <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>   
              <ParticlesComponent />
              <div className='notfound'>
                <div className='notfound-header'>
                    <h1 className='glitch number' data-text="404">404</h1>
                    <h1 className='glitch' data-text="Page or Content Not Found!">Page or Content Not Found!</h1>
                </div>
            </div>
        </motion.div>
    </Layout>
  )
}