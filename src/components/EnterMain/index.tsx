import React, { SetStateAction, useContext, useState } from 'react';
import nonFiction from '../../assets/images/hololive_en_non_fiction.svg';
import styles from './EnterMain.module.scss';
import { GlobalContext } from '../../GlobalContext/context';

function EnterMain() {
  const { startButton, setStartButton } = useContext(GlobalContext);
  return (
    <div className={styles.EnterMain}>
      <h1>Start Page</h1>
      <img src={nonFiction} alt="Hololive EN Non-Fiction" />
      <input type="button" value="Tap to start" onClick={() => setStartButton!(!startButton)} />
    </div>
  );
}

export default EnterMain;
