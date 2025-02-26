import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import connectDB from "./config/db"
import User from "./models/user"
import bcrypt from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub({
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            clientId: process.env.GITHUB_CLIENT_ID,
        }),
        Google({
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            clientId: process.env.GOOGLE_CLIENT_ID,
        }),
        Credentials({
            name: 'local',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            authorize: async (credentials) => {
                const email = credentials.email as string | undefined
                const password = credentials.password as string | undefined

                if (!(email && password)) throw new CredentialsSignin('Please fill all fields!')

                await connectDB()

                const user = await User.findOne({ email }).select('+password +isAdmin')

                if (!(user && user.password)) throw new Error('Invalid email or password!')

                const isPasswordMatch = await bcrypt.compare(password, user.password)

                if (!isPasswordMatch) throw new Error('Invalid email or password!')

                const userData = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    id: user._id,
                }
                return userData;
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async session({ session, token }) {
            if (token?.sub) session.user.id = token.sub
        }
    }
}) 