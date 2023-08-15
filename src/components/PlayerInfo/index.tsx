import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext/context';
import leftIcon from '../../assets/images/loi_pfp.jpg';
import rightIcon from '../../assets/images/master.png';
import styles from './PlayerInfo.module.scss';

export const PlayerInfo = () => {
  const { setTopProfileButton, setBottomProfileButton } = useContext(GlobalContext);
  return (
    <div className={styles.PlayerInfo}>
      <div>
        <button onClick={() => setTopProfileButton!(true)}>
          <img src={leftIcon} />
        </button>
        <div>
          <h2>[CT] Shifu</h2>
          <h3>lvl 60 - [title here]</h3>
        </div>
      </div>
      <div>
        <button onClick={() => setBottomProfileButton!(true)}>
          <img src={rightIcon} />
        </button>
        <div>
          <h2>[CT] Arexma</h2>
          <h3>lvl 60 - [title here]</h3>
        </div>
      </div>
    </div>
  );
};
