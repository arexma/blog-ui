import React, { useContext, useState } from 'react';
import EnterMain from '../../components/EnterMain';
import { Lobby } from '../../components/Lobby';
import { GlobalContext } from '../../GlobalContext/context';
import styles from './Home.module.scss';
import { Chat } from '../../components/Chat';
export const Home = () => {
  const { startButton } = useContext(GlobalContext);

  return (
    <Chat />
    // <div className={styles.Home}>
    //   {!startButton && <EnterMain />}
    //   {startButton && <Lobby />}
    // </div>
  );
};
