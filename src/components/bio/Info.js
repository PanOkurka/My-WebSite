import React from 'react'
import Particles from '../ParticleComponent'
import './Info.css'

function Info() {
    return (
        <>
        <Particles />
        <div className='center'>
            <div class="bio-container">
                    <h1><strong>My Bio:</strong></h1>
                    <div class="bio-container-2">
                        <p className='p'>Hi! My nickname is <span className='blurpur'>Pan_Okurka</span>. I live in the Czech Republic. I'm coding Discord bots, websites and right now working on Atorpol Projects. <br /> <br /> I've been coding for almost <span className='blurpur'> 4 years</span>. <br /> <br /> U can check out my discord server called <span className='blurpur'>"Cucumber Development"</span>, where I post news about my discord bot. My Discord Tag is <span className='blurpur'>Pan_Okurka#8080</span></p>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Info
