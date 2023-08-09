import React, { useContext, useState } from 'react';
import EnterMain from '../../components/EnterMain';
import { AboutUs } from '../../components/AboutUs';
import { GlobalContext } from '../../GlobalContext/context';
import styles from './Home.module.scss';
export const Home = () => {
  const { startButton } = useContext(GlobalContext);

  return (
    <div className={styles.Home}>
      {!startButton && <EnterMain />}
      {startButton && <AboutUs />}
    </div>
  );
};
