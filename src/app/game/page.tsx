import { getServerSession } from "next-auth"
import { TicTacToe } from "../components/TicTacToe/TicTacToe"

const Game = async () => {

    const session = await getServerSession()
    if (!session || !session.user) {
        return (
            <>
            <div> Please log in to game</div>
        </>

        )
    }

    return (
        <div className="game-page">
        <TicTacToe/>
        </div>
    )
}


export default Game