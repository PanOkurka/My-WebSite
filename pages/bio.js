import Layout from '../components/layout'
import ParticlesComponent from '../components/paticlecomponent'
import { motion } from 'framer-motion'

export default function Bio() {
  return (
    <Layout>
       <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
              <ParticlesComponent />
                    <div className='center'>
                        <div className="bio-container">
                                <motion.h1 exit={{y: -50, opacity: 0, transition: {duration: 0.6}}} initial={{x: -200, opacity: 0}} animate={{x: 0, opacity: 1, transition: {delay: 0.2, duration: 0.6}}}><strong>My Bio:</strong></motion.h1>
                                <div className="bio-container-2">
                                    <p className='p'>
                                      <motion.p exit={{y: 120, opacity: 0, transition: {duration: 0.6, delay: 0.2}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.3}}}>Hi! My nickname is <span className='blurpur'>Pan_Okurka</span>. I live in the Czech Republic. I&apos;m coding Discord bots, websites.</motion.p> 
                                      <br /> 
                                      <motion.p exit={{y: 120, opacity: 0, transition: {duration: 0.6, delay: 0.1}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.5}}}>I&apos;ve been coding for about <span className='blurpur'> 4 years</span>.</motion.p> 
                                      <br /> 
                                      <motion.p exit={{y: 120, opacity: 0, transition: {duration: 0.6}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.6}}}>U can check out my discord server called <span className='blurpur'>&quot;Cucumber Development&quot;</span>, where I post news about my discord bot. My Discord Tag is <span className='blurpur'>Pan_Okurka#8577</span></motion.p>
                                      </p>
                                </div>
                        </div>
                    </div>
        </motion.div>
    </Layout>
  )
}