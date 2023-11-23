import '@/app/components/GameOver/GameOver.css'


export const GameProgress = {
    inProgress: 'Game still running',
    xWins: 'Player X won',
    oWins: 'Player O won',
    draw: 'DRAW'
}


export const GameOver = ({ gameProgress }: any) => {


    switch (gameProgress) {
        default:
        return (
            <></>
        )
        case GameProgress.inProgress:
            return (
                <>
                </>
            )
        case GameProgress.xWins:
            return (
                <div className="game-over-container">{GameProgress.xWins}</div>
            )
        case GameProgress.oWins:
            return (
                <div className="game-over-container">{GameProgress.oWins}</div>
            )
        case GameProgress.draw:
            return (
                <div className="game-over-container">{GameProgress.draw}</div>
            )
        
    }
    
}