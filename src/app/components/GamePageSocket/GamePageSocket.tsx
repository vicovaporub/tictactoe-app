'use client'
import React, { useEffect } from 'react'
import { TicTacToe } from '../TicTacToe/TicTacToe'
import { io } from 'socket.io-client';

export default function GamePageSocket() {

    // Create a socket connection when the component mounts
 const socket = io('http://localhost:5000');

 // Set up event listeners when the component mounts
 useEffect(() => {
   // Log socket ID on connection
   const handleConnect = () => {
     console.log('Connected with ID:', socket.id);
   };

   // Log socket ID on disconnection
   const handleDisconnect = () => {
     console.log('Disconnected with ID:', socket.id);
   };

   // Set up event listeners
   socket.on('connect', handleConnect);
   socket.on('disconnect', handleDisconnect);

   // Clean up the event listeners when the component is unmounted
   return () => {
     socket.off('connect', handleConnect);
     socket.off('disconnect', handleDisconnect);
   };
 }, [socket]); // Include socket in the dependency array to avoid ESLint warnings

  return (
    <div className="game-page">
    <TicTacToe />
    </div>
  )
}
