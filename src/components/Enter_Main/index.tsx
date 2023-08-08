import React, { SetStateAction, useState } from 'react';
import nonFiction from '../../assets/images/hololive_en_non_fiction.svg';
interface EnterMainProps {
  enterClicked: boolean;
  setEnterClick: React.Dispatch<SetStateAction<boolean>>;
}
import './index.css'


function EnterMain(props: EnterMainProps) {
  return (
    <div className='center'>
      <h1 className='start-title'>Start Page</h1>
      <img className='start-image' src={nonFiction} alt="Hololive EN Non-Fiction" />
      <input
        className='start-button'
        type="button"
        value="Tap to start"
        onClick={() => props.setEnterClick(!props.enterClicked)}
      />
    </div>
  );
}

export default EnterMain;
