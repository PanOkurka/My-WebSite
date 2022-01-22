import Layout from '../components/layout'
import ParticlesComponent from '../components/paticlecomponent'

export default function Bio() {
  return (
    <Layout>
       <>
              <ParticlesComponent />
                    <div className='center'>
                        <div className="bio-container">
                                <h1><strong>My Bio:</strong></h1>
                                <div className="bio-container-2">
                                    <p className='p'>Hi! My nickname is <span className='blurpur'>Pan_Okurka</span>. I live in the Czech Republic. I'm coding Discord bots, websites. <br /> <br /> I've been coding for about <span className='blurpur'> 4 years</span>. <br /> <br /> U can check out my discord server called <span className='blurpur'>"Cucumber Development"</span>, where I post news about my discord bot. My Discord Tag is <span className='blurpur'>Pan_Okurka#8577</span></p>
                                </div>
                        </div>
                    </div>
        </>
    </Layout>
  )
}