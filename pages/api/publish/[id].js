// PUT /api/publish/:id
import prisma from '../../../lib/prismadb.ts'

export default async function handle(req, res) {
    const postId = req.query.id
    const post = await prisma.post.update({
        where: {id: Number(postId)},
        data: {published: true}
    })
    return res.json(post)
}