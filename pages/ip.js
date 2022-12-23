import Layout from '../components/layout'
import ParticlesComponent from '../components/paticlecomponent'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function IPFinder() {

    const [ip, setIP] = useState('');
    const [country, setCountry] = useState('');

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        setIP(res.data.IPv4);
        setCountry(res.data.country_name);
    }


    useEffect( () => {
        //passing getData method to the lifecycle method
        getData()
    
      }, [])

  return (
    <Layout>
       <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
              <ParticlesComponent />
              <div className='IPFinder'>
                    <div className='data'>
                        <h1>Your IP</h1>
                        <h2>{ip}</h2>
                        <br/>
                        <h1>You are from</h1>
                        <h2>{country}</h2>
                        <br/>
                        <Image alt='FunnyDoge' src='https://cdn.discordapp.com/emojis/895685973097205822.webp?size=96&quality=lossless' height='150px' width="150px" />
                    </div>
              </div>
        </motion.div>
    </Layout>
  )
}