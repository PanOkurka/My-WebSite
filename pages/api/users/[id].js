// PUT /api/users/:id
import prisma from '../../../lib/prismadb.ts'

export default async function handle(req, res) {
    const { role } = req.body
    const userId = req.query.id
    const user = await prisma.user.update({
        where: {id: userId},
        data: {role: role}
    })
    return res.json(user)
}