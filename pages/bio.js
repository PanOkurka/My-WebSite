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
                                    <div className='p'>
                                      <motion.p exit={{y: 120, opacity: 0, transition: {duration: 0.6, delay: 0.2}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.3}}}>
                                        Hi! My name is <span className='blurpur'>Thomas K.</span>, and I&apos;m from the Czech Republic. You might know me by my nickname, <span className='blurpur'>Pan_Okurka</span>. Currently, I&apos;m a student, athlete, and developer. If you want know more about me, check out my <span className='blurpur'>Instagram</span>!
                                      </motion.p> 
                                      <br /> 
                                      <motion.p exit={{y: 120, opacity: 0, transition: {duration: 0.6, delay: 0.1}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.5}}}>
                                       I&apos;ve been coding for about <span className='blurpur'>6 years</span>. For now, I&apos;m working on a few big <span className='blurpur'>projects</span>, so be patient and watch my blog! There, I&apos;ll be <span className='blurpur'>posting</span> more about what&apos;s to come! Mainly, I specialize in <span className='blurpur'>front-end</span> development, but I can do some <span className='blurpur'>back-end</span> stuff too.
                                      </motion.p> 
                                      <br /> 
                                      <motion.p exit={{y: 120, opacity: 0, transition: {duration: 0.6}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.6}}}>
                                        You can check out my work in the &apos;<span className='blurpur'>Projects</span>&apos; tab. Also, if you want to <span className='blurpur'>contact me</span>, you can do so via Discord or email. <span className='blurpur'>Pan_Okurka#8577</span> is my Discord ID, and my email is <span className='blurpur'>okurka@baby-cucumber.com</span>.
                                      </motion.p>
                                    </div>
                                </div>
                        </div>
                    </div>
        </motion.div>
    </Layout>
  )
}