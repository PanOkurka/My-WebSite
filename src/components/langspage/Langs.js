import React from 'react'
import './Langs.css'
import Particles from '../ParticleComponent'

function Langs() {
    return (
        <>
        <Particles className='praticlesjs'/>
        <div className='info2'>
            <div className="langs-container">
                    <div className="langs-container-3">
                        <p className="skilstext">HTML</p>
                        <div className="w3-container w3-blue w3-round-xlarge HTML" ><span className="skills-number1">100%</span></div>
                        <br />
                        <p className="skilstext">JavaScript | NodeJS</p>
                        <div className="w3-container w3-blue w3-round-xlarge NODEJS" ><span className="skills-number2">85%</span></div>
                        <br />
                        <p className="skilstext">CSS</p>
                        <div className="w3-container w3-blue w3-round-xlarge StyleMake" ><span className="skills-number3">60%</span></div>
                        <br />
                        <p className="skilstext">PHP</p>
                        <div className="w3-container w3-blue w3-round-xlarge PHP" ><span className="skills-number4">25%</span></div>
                        <br />
                        <p className="skilstext">ReactJS</p>
                        <div class="w3-container w3-blue w3-round-xlarge REACTJS" ><span className="skills-number5">55%</span></div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Langs
