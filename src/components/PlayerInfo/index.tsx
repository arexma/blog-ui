import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext/context';
import leftIcon from '../../assets/images/loi_pfp.jpg';
import rightIcon from '../../assets/images/master.png';
import styles from './PlayerInfo.module.scss';

export const PlayerInfo = () => {
  const { setLeftProfileButton, setRightProfileButton } = useContext(GlobalContext);
  return (
    <div className={styles.CharacterSnippet}>
      <div className={styles.left}>
        <button onClick={() => setLeftProfileButton!(true)}>
          <img src={leftIcon} />
        </button>
        <h2>Loi V. Nguyen</h2>
        <h3>{'Fill here'}</h3>
      </div>
      <div className={styles.right}>
        <button onClick={() => setRightProfileButton!(true)}>
          <img src={rightIcon} />
        </button>
        <h2>Alexander R. Ma</h2>
        <h3>Level 100</h3>
      </div>
    </div>
  );
};
