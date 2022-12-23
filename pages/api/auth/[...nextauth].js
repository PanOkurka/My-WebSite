import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENTID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: "Username", type: "text" },
          email: { label: "E-Mail", type: "email" },
          password: {  label: "Passworld", type: "password" }
        },
        async authorize(credentials, req) {
         const {username, password, email} = credentials
    
          if (username === process.env.AUTH_USERNAME  && password === process.env.PASS && email === process.env.EMAIL) {
            return {name: process.env.AUTH_USERNAME, email: process.env.EMAIL}
          }

          return null
        }
      })
  ],
  secret: process.env.JWT_SECRET,
}
export default NextAuth(authOptions)