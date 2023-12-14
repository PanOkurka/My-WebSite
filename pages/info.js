import Layout from '../components/layout'
import ParticlesComponent from '../components/paticlecomponent'
import { motion } from 'framer-motion'
import { Progress, Card, CardBody, CardHeader } from '@nextui-org/react'

export default function Info() {
  return (
    <Layout>
       <motion.div exit={{opacity: 0, transition: {duration: 0.6, delay: 0.5}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
              <ParticlesComponent />
              <div className='info2'>
                <div className="langs-container">
                    <div className="langs-container-3">
                        <Card className='mb-4'>
                          <CardBody>
                            <h2 className='text-2xl text-[#7289DA]'>Front-End</h2>
                            <p className='text-sm text-[#7289DA]'>HTML, CSS, SCSS, TailwindCSS, JS, TS, ReactJS, NextJS, Webpack, NextUI</p>
                            <Progress className='mt-2' size='lg' aria-label='Frontend' value={100}
                              classNames={{
                                indicator: "bg-gradient-to-r from-green-500 to-blue-400"
                              }}
                            />
                          </CardBody>
                        </Card>
                        <Card className='mb-4'>
                          <CardBody>
                            <h2 className='text-2xl text-[#7289DA]'>Back-End</h2>
                            <p className='text-sm text-[#7289DA]'>PHP, NodeJS, GoLang and some Java</p>
                            <Progress className='mt-2' size='lg' aria-label='Frontend' value={35}
                              classNames={{
                                indicator: "bg-gradient-to-r from-red-800 to-yellow-500"
                              }}
                            />
                          </CardBody>
                        </Card>
                        <Card className='mb-4'>
                          <CardBody>
                            <h2 className='text-2xl text-[#7289DA]'>Database</h2>
                            <p className='text-sm text-[#7289DA]'>MySQL, MongoDB, SQLite, Redis, Prisma</p>
                            <Progress className='mt-2' size='lg' aria-label='Frontend' value={45}
                              classNames={{
                                indicator: "bg-gradient-to-r from-blue-800 to-purple-800"
                              }}
                            />
                          </CardBody>
                        </Card>
                        <Card>
                          <CardBody>
                            <h2 className='text-2xl text-[#7289DA]'>Dev Ops</h2>
                            <p className='text-sm text-[#7289DA]'>NGINX, AWS, Docker, WHMCS, ProxMox, Hetzner, OCI, Qemu</p>
                            <Progress className='mt-2' size='lg' aria-label='Frontend' value={65}
                              classNames={{
                                indicator: "bg-gradient-to-r from-purple-600 to-pink-800"
                              }}
                            />
                          </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </motion.div>
    </Layout>
  )
}