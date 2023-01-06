import Layout from '../components/layout'
import ParticlesComponent from '../components/paticlecomponent'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion'
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5'
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript'
import { GiStoneBlock } from '@react-icons/all-files/gi/GiStoneBlock'
import { TbBrandNextjs, TbBrandDocker } from 'react-icons/tb'
import { MdGTranslate } from 'react-icons/md'
import { GiServerRack } from 'react-icons/gi'
import { BsQuestionCircle } from 'react-icons/bs'

export default function Projects() {
  return (
    <Layout>
       <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
              <ParticlesComponent />
              <VerticalTimeline key='list'>
                <VerticalTimelineElement
                    key='1'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2017 - present"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<FaHtml5 />}
                >
                    <h3 className="vertical-timeline-element-title">Website Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Czechia</h4>
                    <p>
                        At this time only HTML, CSS and basic JS<br/> 
                        After some time moved to ReactJS <br/>
                        And now NextJS, TailwindCSS and more.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='2'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2019 - 2020"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<SiJavascript />}
                >
                    <h3 className="vertical-timeline-element-title">Baby-Cucumber v1.0</h3>
                    <h4 className="vertical-timeline-element-subtitle">Discord Bot</h4>
                    <p>
                        Basic Discord Bot with features for moderation, fun and more.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='3'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2019 - 2019"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<GiStoneBlock />}
                >
                    <h3 className="vertical-timeline-element-title">AdvancedCraft</h3>
                    <h4 className="vertical-timeline-element-subtitle">Minecraft Server</h4>
                    <p>
                        Technik of this server
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='4'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2019 - 2020"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<GiStoneBlock />}
                >
                    <h3 className="vertical-timeline-element-title">DarkMines (VIPCraft)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Minecraft Server</h4>
                    <p>
                        Builder, Admin, Technik
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='5'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2020 - present"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<SiJavascript />}
                >
                    <h3 className="vertical-timeline-element-title">Baby-Cucumber v2.0</h3>
                    <h4 className="vertical-timeline-element-subtitle">Discord Bot</h4>
                    <p>
                        Advanced Discord Bot with lot of features.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='6'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="late 2019 - early 2021"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<GiStoneBlock />}
                >
                    <h3 className="vertical-timeline-element-title">OkurkaCraft</h3>
                    <h4 className="vertical-timeline-element-subtitle">Minecraft server</h4>
                    <p>
                        My own minecraft server with whitelist
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='7'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2019 - 2021"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<GiServerRack />}
                >
                    <h3 className="vertical-timeline-element-title">Atropol</h3>
                    <h4 className="vertical-timeline-element-subtitle">MC, Hosting, Other</h4>
                    <p>
                        Technik and Developer | Really good company
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='8'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2021 - 2022"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<TbBrandDocker />}
                >
                    <h3 className="vertical-timeline-element-title">Okurka Images</h3>
                    <h4 className="vertical-timeline-element-subtitle">Pterodactyl panel</h4>
                    <p>
                        Some pterodactyl panel images for minecraft
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='9'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2021 - present"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<MdGTranslate />}
                >
                    <h3 className="vertical-timeline-element-title">Plugin Translation</h3>
                    <h4 className="vertical-timeline-element-subtitle">Minecraft - TechsCode</h4>
                    <p>
                        Translations of TechsCode minecraft plugins
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='10'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2021 - present"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<SiJavascript />}
                >
                    <h3 className="vertical-timeline-element-title">Cucumber/Dragonex Radio</h3>
                    <h4 className="vertical-timeline-element-subtitle">Discord Bot</h4>
                    <p>
                        Simple 24/7 radio of lofi music
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='11'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2021 - 2022"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<TbBrandNextjs />}
                >
                    <h3 className="vertical-timeline-element-title">Dragonex Network</h3>
                    <h4 className="vertical-timeline-element-subtitle">Minecraft Server</h4>
                    <p>
                        Website Developer, Technik
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='12'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2022 - 2022"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<TbBrandNextjs />}
                >
                    <h3 className="vertical-timeline-element-title">Ethernal</h3>
                    <h4 className="vertical-timeline-element-subtitle">Minecraft Server</h4>
                    <p>
                        Website Developer
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='13'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2022 - 2022"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<SiJavascript />}
                >
                    <h3 className="vertical-timeline-element-title">Mejs.cz</h3>
                    <h4 className="vertical-timeline-element-subtitle">Minecraft Server</h4>
                    <p>
                        Discord bot Developer
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='14'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2022 - present"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<BsQuestionCircle />}
                >
                    <h3 className="vertical-timeline-element-title">Greenex Network</h3>
                    <h4 className="vertical-timeline-element-subtitle">Soon...</h4>
                    <p>
                        Founder, Technik
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='15'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2022 - present"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<TbBrandNextjs />}
                >
                    <h3 className="vertical-timeline-element-title">Freelancer</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    key='16'
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#39393A', color: '#7289DA', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #39393A' }}
                    date="2022 - present"
                    iconStyle={{ background: '#39393A', color: '#7289DA' }}
                    icon={<BsQuestionCircle />}
                >
                    <h3 className="vertical-timeline-element-title">OkurkaCraft S2</h3>
                    <h4 className="vertical-timeline-element-subtitle">Minecraft whitelist server!</h4>
                    <p>
                        Founder and Developer
                    </p>
                </VerticalTimelineElement>
                </VerticalTimeline>
        </motion.div>
    </Layout>
  )
}