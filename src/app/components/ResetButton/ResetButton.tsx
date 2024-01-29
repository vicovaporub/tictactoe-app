import '@/app/components/ResetButton/ResetButton.css'
import { GameProgress } from '../GameOver/GameOver'

interface ResetButtonProps {
    gameProgress: string;
    onReset: () => void
}

export const ResetButton = ({ gameProgress, onReset }: ResetButtonProps) => {
    if (gameProgress === GameProgress.inProgress) {
        return
    }

    return (
        <div className="reset-button" onClick={onReset}>RESET GAME</div>
    )
}