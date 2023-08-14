import React, { useContext } from 'react';
import { PlayerInfo } from '../PlayerInfo';
import { IconModal } from '../IconModal';
import { GlobalContext } from '../../GlobalContext/context';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  const { leftProfileButton, setLeftProfileButton, rightProfileButton, setRightProfileButton } =
    useContext(GlobalContext);

  return (
    <div className={styles.AboutUs}>
      <div className={styles['row-one']}>
        <PlayerInfo />
      </div>
      <div className={styles['row-two']}></div>
      <div className={styles['row-three']}></div>
      <div className={styles['row-four']}></div>
      {leftProfileButton && <IconModal clicked={leftProfileButton} setClicked={setLeftProfileButton!} />}
      {rightProfileButton && <IconModal clicked={rightProfileButton} setClicked={setRightProfileButton!} />}
    </div>
  );
};
