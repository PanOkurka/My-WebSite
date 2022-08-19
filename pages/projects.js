import Layout from '../components/layout'
import ParticlesComponent from '../components/paticlecomponent'
import CardDeck from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <Layout>
       <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
              <ParticlesComponent />
              <div className='center2'>
                <div className='project-container'>
                    <motion.div className='space-line' exit={{x: -250, opacity: 0, transition: {duration: 0.6}}} initial={{x: -300, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.7, delay: 0.3, type: 'spring', bounce: 0.25, damping: 6,}}}>
                    <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="/images/Dragonex.jpg" />
                        <Card.Body>
                        <Card.Title>Dragonex</Card.Title>
                        <Card.Text>
                            A server rendering web for CZ/SK minecraft server. <br /><br />
                            <a href='https://dragonex.eu' className='FixedTest' target='_self'>Link Here</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/OkurkaCraftSite.png" />
                        <Card.Body>
                        <Card.Title>OkurkaCraft Site</Card.Title>
                        <Card.Text>
                            Just my little website for my Minecraft Server!<br /><br />
                            <a href='https://okurkacraft.baby-cucumber.com' className='FixedTest' target='_self'>Link Here (Off)</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/BabyCucumberSite.png" />
                        <Card.Body>
                        <Card.Title>Baby-Cucumber Site</Card.Title>
                        <Card.Text>
                            A website for my Discord bot!<br></br> 
                            If u wanna know more just join my discord!<br /><br />
                            <a href='https://baby-cucumber.com' className='FixedTest' target='_self'>Link Here</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardDeck>
                    </motion.div>
                    <motion.div className='space-line' exit={{x: 250, opacity: 0, transition: {duration: 0.6}}} initial={{x: 300, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.7, delay: 0.3, type: 'spring', bounce: 0.25, damping: 6,}}}>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="/images/WinDriLogo.png" />
                            <Card.Body>
                            <Card.Title>WinDriCraft</Card.Title>
                            <Card.Text>
                                A minecraft modpack project!<br></br>Rn in development
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="/images/Ethernal.jpg" />
                            <Card.Body>
                            <Card.Title>Ethernal.cz</Card.Title>
                            <Card.Text>
                                Simple NestJS website for Ethernal.<br /><br />
                                <a href='https://www.ethernal.cz' className='FixedTest' target='_self'>Link Here</a>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="/images/serverjars.png" />
                            <Card.Body>
                            <Card.Title>MINECRAFT JARS</Card.Title>
                            <Card.Text>
                                Just a page with server jars.<br/>Using ServerJars.com API<br></br>
                                <a href='https://serverjars.baby-cucumber.com/' className='FixedTest' target='_self'>Link Here</a>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </Layout>
  )
}