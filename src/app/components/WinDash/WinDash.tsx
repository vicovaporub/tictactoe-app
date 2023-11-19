import '@/app/components/WinDash/WinDash.css'

export const WinDash = ({ winClass }: any) => {
    return (
        <div className={`win ${winClass}`}></div>
    )
}