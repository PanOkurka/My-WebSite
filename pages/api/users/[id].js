// PUT /api/users/:id
import prisma from '../../../lib/prismadb.ts'

import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '../auth/[...nextauth]'

export default async function handle(req, res) {

    const session = await unstable_getServerSession(req, res, authOptions)
    
    if(session){
        if(session.user.role === "Admin" || session.user.email === process.env.NEXT_PUBLIC_SUPER_ADMIN){
            const { role } = req.body
            const userId = req.query.id
            const user = await prisma.user.update({
                where: {id: userId},
                data: {role: role}
            })
            return res.json(user)
        } else {
            return res.json('Do not have perms!')
        }
    } else {
      return res.status(401)
    }
}