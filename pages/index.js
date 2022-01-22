import Layout from '../components/layout'
import { FaGithub, FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa'
import Typing from '../components/typing'
import ParticlesComponent from '../components/paticlecomponent'

export default function Home() {
  return (
    <Layout>
       <>
            <div className='wraper'>
              <ParticlesComponent />
                <div className='centerBox'> 
                    <div className='centerMain'>
                        <img className='Banner' src='/images/Funny.gif' alt='Funny' />
                        <div className='ContentMove'>
                            <img className='Avatar' src="/images/profile.gif" alt="profile" />
                            <div className='Center'>
                                <h1 className='Name'>Pan_Okurka</h1>
                                <h2 className='text'>I code in <Typing/></h2>
                            </div>
                            <div className='Links'>
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
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    </Layout>
  )
}