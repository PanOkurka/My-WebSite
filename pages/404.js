import Layout from '../components/layout'
import { FaGithub, FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa'
import Typing from '../components/typing'
import ParticlesComponent from '../components/paticlecomponent'

export default function Custom404() {
  return (
    <Layout>
       <>   
              <ParticlesComponent />
              <div className='notfound'>
                <div className='notfound-header'>
                    <h1 className='glitch number' data-text="404">404</h1>
                    <h1 className='glitch' data-text="Page or Content Not Found!">Page or Content Not Found!</h1>
                </div>
            </div>
        </>
    </Layout>
  )
}