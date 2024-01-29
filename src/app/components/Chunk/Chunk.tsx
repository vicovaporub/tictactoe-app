import '@/app/components/Chunk/Chunk.css'

interface ChunkProps {
    className: string;
    value: string | null;
    onClick: () => void;
    userTurn: string;
}

export const Chunk = ( {className, value, onClick, userTurn}: ChunkProps ) => {

    let hoverClass = null

    if(value == null && userTurn != null) {
        hoverClass = `${userTurn.toLowerCase()}-hover`
    }

    return (
        <div onClick={onClick} className={`chunk ${className} ${hoverClass}`}>{value}</div>
    )
}