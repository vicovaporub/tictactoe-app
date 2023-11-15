'use client'
import '@/app/components/AuthButton/AuthButton.css'
import { signIn, signOut, useSession } from "next-auth/react"

export const AuthButton = () => {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
            <div className="auth-button" onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</div>
            </>
        )
    }

    return (
        <>
        Not signed in <br/>
        <div className="auth-button" onClick={() => signIn()}>Sign in</div>
        </>
    )
}