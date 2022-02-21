import Layout from '../components/layout'
import { FaGithub, FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa'
import Typing from '../components/typing'
import ParticlesComponent from '../components/paticlecomponent'
import Image from 'next/image'
import Banner from '../public/images/Funny.gif'
import present from 'present'
import { IoIosTimer } from '@react-icons/all-files/io/IoIosTimer'

export default function Home() {

    const Time = present() / 1000;
    var LoadTime = Time.toString().substring(0, 5)


  return (
    <Layout>
       <>
            <div className='wraper'>
              <ParticlesComponent />
                <div className='centerBox'> 
                    <div className='centerMain'>
                        <div className='Banner'>
                            <Image className='Banner' src={Banner} alt='Funny' />
                        </div>
                        <div className='ContentMove'>
                            <div className='Avatar'>
                                <Image priority="1" className='Avatar' src="/images/profile.gif" alt='profile' height='200px' width="200px" />
                            </div>
                            <div className='Center'>
                                <h1 className='Name'>Pan_Okurka</h1>
                                <h2 className='text'>I code in <Typing/></h2>
                                <div className='customText'><h2><i>„Je dost těžké najít chybu v kódu, když ji hledáte; je to ještě těžší, když předpokládáte, že váš kód je bez chyb.“</i><br/><span className='podpis'>- Steve McConnell</span></h2></div>
                                <div className='LoadTime'>
                                    <IoIosTimer/><h4>{LoadTime}s</h4>
                                </div>
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