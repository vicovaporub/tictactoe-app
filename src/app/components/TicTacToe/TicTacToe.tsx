'use client'
import '@/app/components/TicTacToe/TicTacToe.css'
import { useState } from 'react'
import { Board } from '../Board/Board'

const playerX = 'X'
const playerO = 'O'

export const TicTacToe = () => {
    const [chunks, setChunks] = useState(Array(9).fill(null))
    const [userTurn, setUserTurn] = useState(playerX)


    const handleChunkClick = (e: any) => {
        if(chunks[e] !== null) {
            return
        }
        const newChunks = [...chunks]
        newChunks[e] = userTurn
        setChunks(newChunks)
        if(userTurn === playerX) {
            setUserTurn(playerO)
        } else {
            setUserTurn(playerX)
        }
    }

    return (
        <div className='game-container'>
            <Board userTurn={userTurn} onChunkClick={handleChunkClick} chunks={chunks}/>
        </div>
    )
}