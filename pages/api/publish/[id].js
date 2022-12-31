// PUT /api/publish/:id
import prisma from '../../../lib/prismadb.ts'

import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '../auth/[...nextauth]'

export default async function handle(req, res) {

    const session = await unstable_getServerSession(req, res, authOptions)

    if(session){
        if(session.user.role === "Admin" || session.user.email === process.env.NEXT_PUBLIC_SUPER_ADMIN){
            const postId = req.query.id
            const post = await prisma.post.update({
                where: {id: Number(postId)},
                data: {published: true}
            })
            return res.json(post)
        } else {
            return res.json('Do not have perms!')
        }
    } else {
      return res.status(401)
    }
}