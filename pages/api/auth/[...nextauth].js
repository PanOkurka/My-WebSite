import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prismadb.ts"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENTID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  secret: process.env.JWT_SECRET,
  adapter: PrismaAdapter(prisma),
}
export default NextAuth(authOptions)