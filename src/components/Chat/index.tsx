import React, { useEffect, useState } from 'react';
import styles from './Chat.module.scss';
import io, { Socket } from 'socket.io-client';

export const Chat = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  });

  useEffect(() => {
    if (!socket) return;

    socket.on('chat message', (msg: string) => {
      setMessages(messages => [...messages, msg]);
    });
  }, [socket]);

  const handleSendMessage = () => {
    if (socket && inputMessage.trim() !== '') {
      socket.emit('chat message', inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className={styles.Chat}>
      <div>
        {messages.map((msg, index) => (
          <p>{msg}</p>
        ))}
      </div>
      <input type="text" value={inputMessage} onChange={e => setInputMessage(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};
