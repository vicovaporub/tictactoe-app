'use client'
import React, { useEffect } from 'react'
import { TicTacToe } from '../TicTacToe/TicTacToe'
import { io } from 'socket.io-client';

export default function GamePageSocket() {

/* TODO: SOCKET

const socket = io('http://localhost:5000');

 useEffect(() => {
   
   const handleConnect = () => {
     console.log('Connected with ID:', socket.id);
   };


   const handleDisconnect = () => {
     console.log('Disconnected with ID:', socket.id);
   };

 
   socket.on('connect', handleConnect);
   socket.on('disconnect', handleDisconnect);

   
   return () => {
     socket.off('connect', handleConnect);
     socket.off('disconnect', handleDisconnect);
   };
 }, [socket]); */

  return (
    <div className="game-page">
    <TicTacToe />
    </div>
  )
}
