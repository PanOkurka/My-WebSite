import { CardDeck, Card } from 'react-bootstrap'
import './Projects.css'
import Particles from '../ParticleComponent'

function Projects() {
    return (
        <>
            <Particles />
            <div className='center2'>
                <div className='project-container'>
                    <div className='space-line'>
                    <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="AtropolSite.png" />
                        <Card.Body>
                        <Card.Title>Atropol</Card.Title>
                        <Card.Text>
                            A small hosting for CZ and SK. (Out of Date) <br /><br />
                            <a href='https://dsc.gg/atropol' className='FixedTest' target='_self'>Link Here</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="OkurkaCraftSite.png" />
                        <Card.Body>
                        <Card.Title>OkurkaCraft Site</Card.Title>
                        <Card.Text>
                            Just my little website for my Minecraft Server!<br /><br />
                            <a href='/' className='FixedTest' target='_self'>Link Here (Off)</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="BabyCucumberSite.png" />
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
                        <Card.Img variant="top" src="WinDriLogo.png" />
                        <Card.Body>
                        <Card.Title>WinDriCraft</Card.Title>
                        <Card.Text>
                            A minecraft modpack project!<br></br>Rn in development
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="AtropolHostingStatus.png" />
                        <Card.Body>
                        <Card.Title>Atropol StatusPage</Card.Title>
                        <Card.Text>
                            A Status website for Atropol Hosting!<br/><br/>
                            <a href='https://status.atropol.net' className='FixedTest' target='_self'>Link Here</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="IPWare.png" />
                        <Card.Body>
                        <Card.Title>IPWare site</Card.Title>
                        <Card.Text>
                            A React app site with server rendering.<br/><br/><a href='https://ipware.eu' className="FixedTest" target="_self">Link</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardDeck>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
