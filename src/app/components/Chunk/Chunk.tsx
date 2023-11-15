import '@/app/components/Chunk/Chunk.css'

export const Chunk = ( {className, value, onClick, userTurn}: any ) => {

    let hoverClass = null

    if(value == null && userTurn != null) {
        hoverClass = `${userTurn.toLowerCase()}-hover`
    }

    return (
        <div onClick={onClick} className={`chunk ${className} ${hoverClass}`}>{value}</div>
    )
}