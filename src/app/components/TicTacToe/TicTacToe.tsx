"use client";
import "@/app/components/TicTacToe/TicTacToe.css";
import { useEffect, useState } from "react";
import { Board } from "../Board/Board";
import { GameOver, GameProgress } from "../GameOver/GameOver";
import { ResetButton } from "../ResetButton/ResetButton";

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



const checkWinner = (chunks: any, setWinClass: React.Dispatch<React.SetStateAction<string>>, setGameProgress: React.Dispatch<React.SetStateAction<string>>) => {

  if (!chunks) {
    return
  }
   
    for ( const {combo, winClass} of winCondition) {
        const firstChunk = chunks[combo[0]]
        const secondChunk = chunks[combo[1]]
        const thirdChunk = chunks[combo[2]]


        if (firstChunk !== null && firstChunk === secondChunk && firstChunk === thirdChunk) {
            setWinClass(winClass)
            if (firstChunk === playerX) {
              setGameProgress(GameProgress.xWins)
            } else if (firstChunk === playerO) {
              setGameProgress(GameProgress.oWins)
            }
            return
        }
    }

    const drawState = chunks.every((chunk: any) => chunk !== null) 

      if(drawState) {
        setGameProgress(GameProgress.draw)
      }
    

};

export const TicTacToe = () => {
  const [chunks, setChunks] = useState(Array(9).fill(null));
  const [userTurn, setUserTurn] = useState(playerX);
  const [winClass, setWinClass] = useState('');
  const [gameProgress, setGameProgress] = useState(GameProgress.inProgress)


  useEffect(() => {
    checkWinner(chunks, setWinClass, setGameProgress);
  }, [chunks]);


  
  const handleChunkClick = (e: any) => {
    if (gameProgress !== GameProgress.inProgress) {
      return
    }

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
  };


  const handleResetClick = (e: any) => {
    setChunks(Array(9).fill(null))
    setUserTurn(playerX)
    setWinClass('')
    setGameProgress(GameProgress.inProgress)
  }

  return (
    <div className="game-container">
      <Board
        userTurn={userTurn}
        onChunkClick={handleChunkClick}
        chunks={chunks}
        winClass={winClass}
      />
      <GameOver gameProgress={gameProgress}/>
      <ResetButton onReset={handleResetClick} gameProgress={gameProgress}/>
    </div>
  );
};
