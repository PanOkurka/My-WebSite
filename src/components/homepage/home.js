import React from 'react'
import Particles from '../ParticleComponent'
import './home.css'
import Typing from './Typing'
import { FaGithub, FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa'

function Home() {

    return (
        
        <>
            <div className='wraper'>
            <Particles className='particlesjs' />
                <div className='centerMain'>
                    <img className='Avatar' src="OkurkaIcon.jpg" alt="Okurka Icon" />
                    <div id='Center'>
                        <h1 id='Name'>Pan_Okurka</h1>
                        <h2 id='text'>I code in <Typing /></h2>
                    </div>
                    <div className='Links'>
                        <a href='https://github.com/PanOkurka' className='social-icon-link'>
                            <FaGithub className='github-icon' />
                        </a>
                        <a href='https://twitter.com/Pan_Okurka' className='social-icon-link'>
                            <FaTwitter className='twitter-icon'/>
                        </a>
                        <a href='https://www.instagram.com/panokurka_official/' className='social-icon-link'>
                            <FaInstagram className='instagram-icon' />
                        </a>
                        <a href='https://discord.gg/wn5aF2w' className='social-icon-link'>
                            <FaDiscord className='discord-icon' />
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
