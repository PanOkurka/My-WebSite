import Layout from '../../../components/layout'
import ParticlesComponent from '../../../components/paticlecomponent'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { useSession, signIn, getSession } from "next-auth/react"
import prisma from '../../../lib/prismadb.ts'

export const getServerSideProps = async({req, res}) => {
    const session = await getSession({req});
    if(!session){
        res.statusCode = 403
        return { props: {users: []}}
    }

    const users = await prisma.user.findMany()

    return {
        props: { users }
    }
}

export default function Dashboard(props) {

    const { data: session } = useSession({
        required: true
      })

    if(!session){
        return <button className={`login-btn`} onClick={() => signIn()}>Sign in</button>
    }

    //console.log(props)

    if(session.user.role === "Admin" || session.user.email === process.env.NEXT_PUBLIC_SUPER_ADMIN){
        return (
            <Layout>
               <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
                      <ParticlesComponent />
                            <div className='center UsersPage'>
                                <div className='Box'>
                                   <h1 className='text-2xl font-bold pb-2 mb-2'>List of Users</h1>
                                   <div class="overflow-x-auto relative shadow-md sm:rounded-lg UserList">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="py-3 px-6">
                                                        Icon
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Username
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Email
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Role
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {props.users.map((user) => (
                                                <tr key={user.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"><img src={user.image} alt={user.name} className="icon" /></td>
                                                    <td className="py-4 px-6">{user.name}</td>
                                                    <td className="py-4 px-6">{user.email}</td>
                                                    <td className="py-4 px-6">{user.role}</td>
                                                    <td className="py-4 px-6 text-right">
                                                        <Link href={`/dashboard/users/${user.id}`}>
                                                            <a className="font-medium text-blue-600 dark:text-blue-500 hover:no-underline">Edit</a>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                </motion.div>
            </Layout>
          )
    }

  return(
    <Layout>
        <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
           <ParticlesComponent />
                 <div className='center'>
                     <h1 className='text-2xl'>You don&apos;t have perms for that!</h1>
                 </div>
        </motion.div>
    </Layout>
    )
}