'use client'
import '@/app/components/GamePageButton/GamePageButton.css'
import { signIn, useSession } from "next-auth/react"

export const GamePageButton = () => {
    const { data: session } = useSession()

    const handlePlayClick = () => {
        window.location.href = '/game'
    }
  

    if (!session) {
        return (
          <div className="game-page-button" onClick={() => signIn()}>
            Play
          </div>
        )
    } else {
        return (
        <div className="game-page-button" onClick={handlePlayClick}>Play</div>
        )
    }
}
