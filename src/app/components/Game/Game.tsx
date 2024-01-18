import { getServerSession } from "next-auth"
import { TicTacToe } from "../TicTacToe/TicTacToe"
import '@/app/components/Game/Game.css'
import GamePageSocket from "../GamePageSocket/GamePageSocket"

const Game = async () => {

    const session = await getServerSession()
    if (!session || !session.user) {
        return (
            <div className="home-container">
            <div className="welcome-title">Welcome to my Wondrous Tic Tac Toe Game</div>
            <div className="login-alert">Please, log-in so you can play!</div>
            </div>

        )
    }

    return (
        <GamePageSocket />
    )
}


export default Game