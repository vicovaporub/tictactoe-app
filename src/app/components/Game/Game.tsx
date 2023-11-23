import { getServerSession } from "next-auth"
import { TicTacToe } from "../TicTacToe/TicTacToe"
import '@/app/components/Game/Game.css'

const Game = async () => {

    const session = await getServerSession()
    if (!session || !session.user) {
        return (
            <div className="home-container">
            <div className="welcome-title">Welcome to Vico's Wondrous Tic Tac Toe Game</div>
            <div className="login-alert">Please, log-in so you can play!</div>
            </div>

        )
    }

    return (
        <div className="game-page">
        <TicTacToe/>
        </div>
    )
}


export default Game