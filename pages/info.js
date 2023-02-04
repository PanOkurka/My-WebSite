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
                        <motion.p className="skilstext" exit={{x: 150, opacity: 0, transition: {duration: 0.6, delay: 0.5}}} initial={{x: -150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .1}}}>Front-End</motion.p>
                        <motion.p className="skilstext-small" exit={{x: -150, opacity: 0, transition: {duration: 0.6, delay: 0.5}}} initial={{x: 150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .1}}}>HTML, CSS, SCSS, TailwindCSS, JS, TS, ReactJS, NextJS, Webpack</motion.p>
                        <motion.div className="w3-container w3-blue w3-round-xlarge FRONTEND" exit={{y: 150, opacity: 0, transition: {duration: 0.6, delay: 0.5}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: .1}}} ><span className="skills-number1">100%</span></motion.div>
                        <br />
                        <motion.p className="skilstext" exit={{x: 150, opacity: 0, transition: {duration: 0.6, delay: 0.4}}} initial={{x: -150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .25}}}>Back-End</motion.p>
                        <motion.p className="skilstext-small" exit={{x: -150, opacity: 0, transition: {duration: 0.6, delay: 0.4}}} initial={{x: 150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .25}}}>PHP, NodeJS, GoLang and some Java </motion.p>
                        <motion.div className="w3-container w3-blue w3-round-xlarge BACKEND" exit={{y: 150, opacity: 0, transition: {duration: 0.6, delay: 0.4}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: .25}}} ><span className="skills-number2">35%</span></motion.div>
                        <br />
                        <motion.p className="skilstext" exit={{x: 150, opacity: 0, transition: {duration: 0.6, delay: 0.2}}} initial={{x: -150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .37}}}>DataBase</motion.p>
                        <motion.p className="skilstext-small" exit={{x: -150, opacity: 0, transition: {duration: 0.6, delay: 0.2}}} initial={{x: 150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .37}}}>MySQL, MongoDB, SQLite, Redis, Prisma </motion.p>
                        <motion.div className="w3-container w3-blue w3-round-xlarge DATABASE" exit={{y: 150, opacity: 0, transition: {duration: 0.6, delay: 0.2}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: .37}}}><span className="skills-number5">40%</span></motion.div>
                        <br />
                        <motion.p className="skilstext" exit={{x: 150, opacity: 0, transition: {duration: 0.6}}} initial={{x: -150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .44}}}>Dev Ops</motion.p>
                        <motion.p className="skilstext-small" exit={{x: -150, opacity: 0, transition: {duration: 0.6}}} initial={{x: 150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.6, delay: .44}}}>NGINX, AWS, Docker, WHMCS, ProxMox, Hetzner, OCI</motion.p>
                        <motion.div className="w3-container w3-blue w3-round-xlarge DEVOPS" exit={{y: 150, opacity: 0, transition: {duration: 0.6}}} initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: .44}}}><span className="skills-number6">65%</span></motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    </Layout>
  )
}