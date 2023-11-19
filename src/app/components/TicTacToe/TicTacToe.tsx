"use client";
import "@/app/components/TicTacToe/TicTacToe.css";
import { useEffect, useState } from "react";
import { Board } from "../Board/Board";

const playerX = "X";
const playerO = "O";

const winCondition = [
  {
    combo: [0, 1, 2],
    winClass: "dash-row-1",
  },
  {
    combo: [3, 4, 5],
    winClass: "dash-row-2",
  },
  {
    combo: [6, 7, 8],
    winClass: 'dash-row-3'
  },
  {
    combo: [0, 3, 6],
    winClass: 'dash-column-1'
  },
  {
    combo: [1, 4, 7],
    winClass: 'dash-column-2'
  },
  {
    combo: [2, 5, 8],
    winClass: 'dash-column-3'
  },
  {
    combo: [0, 4, 8],
    winClass: 'dash-diagonal-1'
  },
  {
    combo: [2, 4, 6],
    winClass: 'dash-diagonal-2'
  }
];



const checkWinner = (chunks: any, setWinClass: React.Dispatch<React.SetStateAction<string>>) => {

  if (!chunks) {
    return
  }
   
    for ( const {combo, winClass} of winCondition) {
        const firstChunk = chunks[combo[0]]
        const secondChunk = chunks[combo[1]]
        const thirdChunk = chunks[combo[2]]


        if (firstChunk !== null && firstChunk === secondChunk && firstChunk === thirdChunk) {
            setWinClass(winClass)
        }
    }
};

export const TicTacToe = () => {
  const [chunks, setChunks] = useState(Array(9).fill(null));
  const [userTurn, setUserTurn] = useState(playerX);
  const [winClass, setWinClass] = useState('');

  useEffect(() => {
    checkWinner(chunks, setWinClass);
  }, [chunks]);


  
  const handleChunkClick = (e: any) => {

    if (chunks[e] !== null) {
      return;
    }
    const newChunks = [...chunks];
    newChunks[e] = userTurn;
    setChunks(newChunks);
    if (userTurn === playerX) {
      setUserTurn(playerO);
    } else {
      setUserTurn(playerX);
    }
    console.log(chunks)
  };

  return (
    <div className="game-container">
      <Board
        userTurn={userTurn}
        onChunkClick={handleChunkClick}
        chunks={chunks}
        winClass={winClass}
      />
    </div>
  );
};
