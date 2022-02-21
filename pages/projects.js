import Layout from '../components/layout'
import ParticlesComponent from '../components/paticlecomponent'
import CardDeck from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

export default function Projects() {
  return (
    <Layout>
       <>
              <ParticlesComponent />
              <div className='center2'>
                <div className='project-container'>
                    <div className='space-line'>
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
                            <a href='/' className='FixedTest' target='_self'>Link Here (Off)</a>
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
                    </div>
                    <div className='space-line'>
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
                                <a href='https://www.ethernal.cz' className='FixedTest' target='_self'>Link Here (Off-Rn)</a>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                            <Card.Title>???</Card.Title>
                            <Card.Text>
                                ???<br></br>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    </div>
                </div>
            </div>
        </>
    </Layout>
  )
}