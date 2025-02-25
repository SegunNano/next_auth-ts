'use server'

import connectDB from "@/config/db"
import User from "@/models/user"
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"

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

    redirect('/login')
}


export { register }