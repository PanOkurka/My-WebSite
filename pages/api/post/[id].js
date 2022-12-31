// DELETE /api/post/:id
import prisma from '../../../lib/prismadb.ts'

import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '../auth/[...nextauth]'

export default async function handle(req, res) {

    const session = await unstable_getServerSession(req, res, authOptions)

    if(session){
        if(session.user.role === "Admin" || session.user.email === process.env.NEXT_PUBLIC_SUPER_ADMIN){
            const postId = req.query.id
            if(req.method === "DELETE"){
                const post = await prisma.post.delete({
                    where: {id: Number(postId)}
                });
                res.json(post);
            } else {
                throw new Error (
                    `The HTTP ${req.method} method is not supported at this route!`
                )
            }
        } else {
            return res.json('Do not have perms!')
        }
    } else {
      return res.status(401)
    }
}