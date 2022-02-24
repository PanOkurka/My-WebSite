import Layout from '../components/layout'
import ParticlesComponent from '../components/paticlecomponent'
import { motion } from 'framer-motion'

export default function Info() {
  return (
    <Layout>
       <motion.div exit={{opacity: 0, transition: {duration: 0.6, delay: 0.5}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
              <ParticlesComponent />
              <div className='info2'>
                <div className="langs-container">
                    <div className="langs-container-3">
                        <motion.p className="skilstext" exit={{x: 150, opacity: 0, transition: {duration: 0.6, delay: 0.5}}} initial={{x: -150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .1}}}>HTML | CSS</motion.p>
                        <motion.div className="w3-container w3-blue w3-round-xlarge HTML" exit={{y: 150, opacity: 0, transition: {duration: 0.6, delay: 0.5}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: .1}}} ><span className="skills-number1">100%</span></motion.div>
                        <br />
                        <motion.p className="skilstext" exit={{x: -150, opacity: 0, transition: {duration: 0.6, delay: 0.4}}} initial={{x: 150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .25}}}>JavaScript | NodeJS</motion.p>
                        <motion.div className="w3-container w3-blue w3-round-xlarge NODEJS" exit={{y: 150, opacity: 0, transition: {duration: 0.6, delay: 0.4}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: .25}}} ><span className="skills-number2">88%</span></motion.div>
                        <br />
                        <motion.p className="skilstext" exit={{x: 150, opacity: 0, transition: {duration: 0.6, delay: 0.3}}} initial={{x: -150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .37}}}>ReactJS | ExpressJS | NextJS</motion.p>
                        <motion.div className="w3-container w3-blue w3-round-xlarge REACTJS" exit={{y: 150, opacity: 0, transition: {duration: 0.6, delay: 0.3}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: .37}}}><span className="skills-number5">70%</span></motion.div>
                        <br />
                        <motion.p className="skilstext" exit={{x: -150, opacity: 0, transition: {duration: 0.6, delay: 0.2}}} initial={{x: 150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .44}}}>Dockerfile</motion.p>
                        <motion.div className="w3-container w3-blue w3-round-xlarge Dockerfile" exit={{y: 150, opacity: 0, transition: {duration: 0.6, delay: 0.2}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: .44}}}><span className="skills-number6">40%</span></motion.div>
                        <br />
                        <motion.p className="skilstext" exit={{x: 150, opacity: 0, transition: {duration: 0.6, delay: 0.1}}} initial={{x: -150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .52}}}>PHP</motion.p>
                        <motion.div className="w3-container w3-blue w3-round-xlarge PHP" exit={{y: 150, opacity: 0, transition: {duration: 0.6, delay: 0.1}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: .52}}}><span className="skills-number4">25%</span></motion.div>
                        <br />
                        <motion.p className="skilstext" exit={{x: -150, opacity: 0, transition: {duration: 0.6}}} initial={{x: 150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .64}}}>Java</motion.p>
                        <motion.div className="w3-container w3-blue w3-round-xlarge StyleMake" exit={{y: 150, opacity: 0, transition: {duration: 0.6}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: .64}}}><span className="skills-number3">10%</span></motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    </Layout>
  )
}