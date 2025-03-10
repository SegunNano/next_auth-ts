import { auth } from "@/auth"
import { cache } from 'react'
import { useSession } from "next-auth/react";


const getSession = cache(async () => {
    const session = await auth()


    return session
})

export default getSession
