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
                        <p className='p'>Hi! My nickname is <span className='blurpur'>Pan_Okurka</span>. I live in Czech Republic. I make Discord bots, websites and right now working on Atorpol Project's. <br /> <br /> I've been coding around <span className='blurpur'>2 or 3 years</span>. <br /> <br /> My discord server name is <span className='blurpur'>Cucumber Development</span> and here I post some new's about my bot. My Discord Tag is <span className='blurpur'>Pan_Okurka#8080</span></p>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Info
