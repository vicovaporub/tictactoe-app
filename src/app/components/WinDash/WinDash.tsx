import '@/app/components/WinDash/WinDash.css'

interface WinDashProps {
    winClass: string;
}

export const WinDash = ({ winClass }: WinDashProps) => {
    return (
        <div className={`win ${winClass}`}></div>
    )
}