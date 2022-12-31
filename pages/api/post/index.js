import prisma from '../../../lib/prismadb.ts'
import { getSession } from "next-auth/react";

import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '../auth/[...nextauth]'

export default async function handle(req, res) {

    const session = await unstable_getServerSession(req, res, authOptions)

    if(session){
        if(session.user.role === "Admin" || session.user.email === process.env.NEXT_PUBLIC_SUPER_ADMIN){
            const { title, content } = req.body;

            const session = await getSession({req});
            const result = await prisma.post.create({
                data: {
                    title: title,
                    content: content,
                    author: {
                        connect: {
                            email: session?.user.email
                        }
                    }
                }
            })

            res.json(result);
        } else {
            return res.json('Do not have perms!')
        }
    } else {
      return res.status(401)
    }
}