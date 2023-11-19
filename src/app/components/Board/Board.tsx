import '@/app/components/Board/Board.css'
import { Chunk } from '../Chunk/Chunk'
import { WinDash } from '../WinDash/WinDash'

export const Board = ({onChunkClick, chunks, userTurn, winClass }: any) => {
    return (
        <div className='board'>
        <Chunk userTurn={userTurn} onClick={() => onChunkClick(0)} value={chunks[0]} className='right-border bottom-border'/>
        <Chunk userTurn={userTurn} onClick={() => onChunkClick(1)} value={chunks[1]} className='right-border bottom-border'/>
        <Chunk userTurn={userTurn} onClick={() => onChunkClick(2)} value={chunks[2]} className=' bottom-border'/>
        <Chunk userTurn={userTurn} onClick={() => onChunkClick(3)} value={chunks[3]} className='right-border bottom-border'/>
        <Chunk userTurn={userTurn} onClick={() => onChunkClick(4)} value={chunks[4]} className='right-border bottom-border'/>
        <Chunk userTurn={userTurn} onClick={() => onChunkClick(5)} value={chunks[5]} className=' bottom-border'/>
        <Chunk userTurn={userTurn} onClick={() => onChunkClick(6)} value={chunks[6]} className='right-border'/>
        <Chunk userTurn={userTurn} onClick={() => onChunkClick(7)} value={chunks[7]} className='right-border '/>
        <Chunk userTurn={userTurn} onClick={() => onChunkClick(8)} value={chunks[8]} className=''/>
        <WinDash winClass={winClass}/>
    </div>
    )
}