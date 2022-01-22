import Layout from '../components/layout'
import ParticlesComponent from '../components/paticlecomponent'

export default function Info() {
  return (
    <Layout>
       <>
              <ParticlesComponent />
              <div className='info2'>
                <div className="langs-container">
                    <div className="langs-container-3">
                        <p className="skilstext">HTML | CSS</p>
                        <div className="w3-container w3-blue w3-round-xlarge HTML" ><span className="skills-number1">100%</span></div>
                        <br />
                        <p className="skilstext">JavaScript | NodeJS</p>
                        <div className="w3-container w3-blue w3-round-xlarge NODEJS" ><span className="skills-number2">88%</span></div>
                        <br />
                        <p className="skilstext">ReactJS | ExpressJS | NextJS</p>
                        <div className="w3-container w3-blue w3-round-xlarge REACTJS" ><span className="skills-number5">70%</span></div>
                        <br />
                        <p className="skilstext">Dockerfile</p>
                        <div className="w3-container w3-blue w3-round-xlarge Dockerfile" ><span className="skills-number6">40%</span></div>
                        <br />
                        <p className="skilstext">PHP</p>
                        <div className="w3-container w3-blue w3-round-xlarge PHP" ><span className="skills-number4">25%</span></div>
                        <br />
                        <p className="skilstext">Java</p>
                        <div className="w3-container w3-blue w3-round-xlarge StyleMake" ><span className="skills-number3">10%</span></div>
                    </div>
                </div>
            </div>
        </>
    </Layout>
  )
}