'use server'

import { signIn, signOut } from "@/auth"
import connectDB from "@/config/db"
import User from "@/models/user"
import bcrypt from "bcryptjs"
import { CredentialsSignin } from "next-auth"
import { redirect } from "next/navigation"

const loginFunc = async (email: string, password: string) => {
    try {
        await signIn('local', {
            redirect: false,
            callbackUrl: '/',
            email,
            password
        })
    } catch (error) {
        const err = error as CredentialsSignin
        return err.cause
    }
    console.log(`${email} has logged in`)
    redirect('/')
}

const login = async (formData: FormData) => {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    try {
        await signIn('local', {
            redirect: false,
            callbackUrl: '/',
            email,
            password
        })
    } catch (error) {
        const err = error as CredentialsSignin
        return err.cause
    }
    console.log(`${email} has logged in`)
    redirect('/')
}

const register = async (formData: FormData) => {
    const { hash } = bcrypt
    const firstName = formData.get('firstname') as string
    const lastName = formData.get('lastname') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!(firstName && lastName && email && password)) throw new Error('Please fill all fields')

    await connectDB()

    const existingUser = await User.findOne({ email })
    if (existingUser) throw new Error('User already exist!')

    const hashedPassword = await hash(password, 10)
    await User.create({ firstName, lastName, email, password: hashedPassword })

    console.log('User succesfully created!')


    //login user Immedaitelly
    // loginFunc(email, password)
}

const github = async () => {
    await signIn('github')
}
const google = async () => {
    await signIn('google')
}

const logout = async () => {
    await signOut()
}


export { register, login, github, google, logout }