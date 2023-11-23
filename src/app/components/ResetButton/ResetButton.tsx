import '@/app/components/ResetButton/ResetButton.css'
import { GameProgress } from '../GameOver/GameOver'

export const ResetButton = ({ gameProgress, onReset }: any) => {
    if (gameProgress === GameProgress.inProgress) {
        return
    }

    return (
        <div className="reset-button" onClick={onReset}>RESET GAME</div>
    )
}