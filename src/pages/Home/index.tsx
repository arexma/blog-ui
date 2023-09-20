import React, { useContext } from 'react';
import EnterMain from '../../components/EnterMain';
import { Lobby } from '../../components/Lobby';
import { GlobalContext } from '../../GlobalContext/context';
import styles from './Home.module.scss';
export const Home = () => {
  const { startButton } = useContext(GlobalContext);

  return (
    <div className={styles.Home}>
      {!startButton && <EnterMain />}
      {startButton && <Lobby />}
    </div>
  );
};
