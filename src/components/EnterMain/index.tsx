import React, { SetStateAction, useContext, useState } from 'react';
import nonFiction from '../../assets/images/hololive_en_non_fiction.svg';
import './index.css';
import { GlobalContext } from '../../GlobalContext/context';

function EnterMain() {
  const { startButton, setStartButton } = useContext(GlobalContext);
  return (
    <div className="center">
      <h1 className="start-title">Start Page</h1>
      <img className="start-image" src={nonFiction} alt="Hololive EN Non-Fiction" />
      <input
        className="start-button"
        type="button"
        value="Tap to start"
        onClick={() => setStartButton!(!startButton)}
      />
    </div>
  );
}

export default EnterMain;
