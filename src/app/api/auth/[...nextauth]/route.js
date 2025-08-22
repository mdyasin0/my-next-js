import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import dbconnect from "@/lib/mongodb"
import { compare } from "bcryptjs"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const usersCollection = await dbconnect("users")


        const user = await usersCollection.findOne({ email: credentials.email })

        if (!user) {
          throw new Error("No user found with this email")
        }

      
        const isValid = await compare(credentials.password, user.password)

        if (!isValid) {
          throw new Error("Invalid password")
        }

       
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        }
      }
    }),

  
    
  ],

  pages: {
    signIn: "/login" 
  },

  session: {
    strategy: "jwt"
  },

  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
