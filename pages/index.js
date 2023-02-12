import Layout from '../components/layout'
import { FaGithub, FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa'
import Typing from '../components/typing'
import ParticlesComponent from '../components/paticlecomponent'
import Image from 'next/image'
import Banner from '../public/images/standard.gif'
import { motion } from 'framer-motion'

export default function Home() {

  return (
    <Layout>
       <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
            <div className='wraper'>
              <ParticlesComponent />
                <motion.div className='centerBox' exit={{y: -100 , opacity: 0, transition: {duration: 0.8}}} initial={{y: 300 , opacity: 0}} animate={{y: 0 , opacity: 1, transition: {duration: 0.8}}}> 
                    <div className='centerMain'>
                        <div className='Banner'>
                            <Image priority="2" className='Banner' src={Banner} alt='Funny' />
                        </div>
                        <div className='ContentMove'>
                            <motion.div className='Avatar' exit={{x: -250, opacity: 0, transition: {duration: 0.6}}} initial={{x: -300, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.7, delay: 0.3, type: 'spring', bounce: 0.25, damping: 6,}}}>
                                <Image priority="1" className='Avatar' src="/images/profile.gif" alt='profile' height='200px' width="200px" />
                            </motion.div>
                            <motion.div className='Center' exit={{y: 100, opacity: 0, transition: {duration: 0.6}}} initial={{y: 180, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.9}}}>
                                <h1 className='Name'>Pan_Okurka</h1>
                                <h2 className='text'>I code in <Typing/></h2>
                                <a href="https://www.buymeacoffee.com/panokurka" style={{marginTop: '4vh'}} target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style={{height: '60px !important',width: '217px !important', marginTop: '2vh', marginLeft: '3vh'}} /></a>
                                <div className='customText'><h2><i>„Je dost těžké najít chybu v kódu, když ji hledáte; je to ještě těžší, když předpokládáte, že váš kód je bez chyb.“</i><br/><span className='podpis'>- Steve McConnell</span></h2></div>
                            </motion.div>
                            <motion.div className='Links' exit={{x: 250, opacity: 0, transition: {duration: 0.6}}} initial={{x: 310, opacity: 0}} animate={{x:0, opacity: 1, transition: {duration: 0.7, delay: 0.6}}}>
                                <a href='https://github.com/PanOkurka' className='socialiconlist'>
                                    <FaGithub className='githubIcon' />
                                </a>
                                <a href='https://twitter.com/Pan_Okurka' className='socialiconlist'>
                                    <FaTwitter className='twitterIcon'/>
                                </a>
                                <a href='https://www.instagram.com/panokurka_official/' className='socialiconlist'>
                                    <FaInstagram className='instagramIcon' />
                                </a>
                                <a href='https://discord.gg/wn5aF2w' className='socialiconlist'>
                                    <FaDiscord className='discordIcon' />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    </Layout>
  )
}