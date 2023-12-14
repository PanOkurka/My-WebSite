import Layout from '../components/layout'
import ParticlesComponent from '../components/paticlecomponent'
import { motion } from 'framer-motion'

import {Card, CardBody, CardHeader} from "@nextui-org/react";

export default function Bio() {
  return (
    <Layout>
       <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
              <ParticlesComponent />
                    <div className='center'>
                        <motion.div className="bio-container" exit={{y: 120, opacity: 0, transition: {duration: 0.6}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6}}}>
                              <Card className='mb-4'>
                                <CardHeader>
                                <h1><strong>My Bio:</strong></h1>
                                </CardHeader>
                              </Card>
                                <div className="bio-container-2">
                                    <div className='p'>
                                      <Card className='mb-4'>
                                        <CardBody>
                                          <p>Hi! My name is <span className='blurpur'>Thomas K.</span>, and I&apos;m from the Czech Republic. You might know me by my nickname, <span className='blurpur'>Pan_Okurka</span>. Currently, I&apos;m a student, athlete, and developer. If you want know more about me, check out my <span className='blurpur'>Instagram</span>!</p>
                                        </CardBody>
                                      </Card>
                                      <Card className='mb-4'>
                                        <CardBody>
                                          <p>I&apos;ve been coding for about <span className='blurpur'>6 years</span>. For now, I&apos;m working on a few big <span className='blurpur'>projects</span>, so be patient and watch my blog! There, I&apos;ll be <span className='blurpur'>posting</span> more about what&apos;s to come! Mainly, I specialize in <span className='blurpur'>front-end</span> development, but I can do some <span className='blurpur'>back-end</span> stuff too.</p>
                                        </CardBody>
                                      </Card>
                                      <Card>
                                        <CardBody>
                                          <p>You can check out my work in the &apos;<span className='blurpur'>Projects</span>&apos; tab. Also, if you want to <span className='blurpur'>contact me</span>, you can do so via Discord or email. <span className='blurpur'>Pan_Okurka</span> is my Discord Name, and my email is <span className='blurpur'>okurka@baby-cucumber.com</span>.</p>
                                        </CardBody>
                                      </Card>
                                    </div>
                                </div>
                        </motion.div>
                    </div>
        </motion.div>
    </Layout>
  )
}