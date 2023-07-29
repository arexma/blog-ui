import React, { SetStateAction, useState } from 'react';
import nonFiction from '../../assets/images/hololive_en_non_fiction.svg';
interface EnterMainProps {
  enterClicked: boolean;
  setEnterClick: React.Dispatch<SetStateAction<boolean>>;
}

const startButton = {
  position: 'fixed',
  zIndex: 2,
} as React.CSSProperties;

const startImage = {
  position: 'fixed',
  zIndex: 1,
} as React.CSSProperties;

function EnterMain(props: EnterMainProps) {
  return (
    <div>
      <div>
        <img style={startImage} src={nonFiction} alt="Hololive EN Non-Fiction" />
        <input
          style={startButton}
          type="button"
          value="Tap to start"
          onClick={() => props.setEnterClick(!props.enterClicked)}
        />
      </div>
    </div>
  );
}

export default EnterMain;
