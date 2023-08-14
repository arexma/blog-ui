import React, { SetStateAction, useContext, useState } from 'react';
import styles from './EnterMain.module.scss';
import { GlobalContext } from '../../GlobalContext/context';

// TODO: Optimize performance
function EnterMain() {
  const { startButton, setStartButton } = useContext(GlobalContext);
  return (
    <div className={styles.EnterMain}>
      <h1>Start Page</h1>
      <input type="button" value="Tap to start" onClick={() => setStartButton!(!startButton)} />
    </div>
  );
}

export default EnterMain;
