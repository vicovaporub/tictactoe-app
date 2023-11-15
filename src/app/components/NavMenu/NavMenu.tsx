'use client'
import { useSession } from "next-auth/react"
import { AuthButton } from "../AuthButton/AuthButton"
import { GamePageButton } from "../GamePageButton/GamePageButton"
import '@/app/components/NavMenu/NavMenu.css'

export const NavMenu = () => {
    const { data: session } = useSession()

    if (!session) {
        return (
            <>
            <div className="nav-buttoons">
            <AuthButton />
            <GamePageButton />
            </div>
            </>
        )

    } else {
        return (
            <>
            <img src={session?.user?.image} alt={session?.user?.name}></img>
            <br/>
            {session?.user?.name} 
            <div className="nav-buttons">
            <AuthButton />
            <GamePageButton />
            </div>
            </>
        )
    }



}