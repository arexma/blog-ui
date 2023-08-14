import React, { useContext } from 'react';
import { PlayerInfo } from '../PlayerInfo';
import { IconModal } from '../IconModal';
import { GlobalContext } from '../../GlobalContext/context';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  const { topProfileButton, setTopProfileButton, bottomProfileButton, setBottomProfileButton } =
    useContext(GlobalContext);

  return (
    <div className={styles.AboutUs}>
      <div className={styles['row-one']}>
        <PlayerInfo />
      </div>
      <div className={styles['row-two']}></div>
      <div className={styles['row-three']}></div>
      <div className={styles['row-four']}></div>
      {topProfileButton && (
        <IconModal
          clicked={topProfileButton}
          setClicked={setTopProfileButton!}
          title={'Loi V. Nguyen (Shifu)'}
          body={'I loveee gacha games'}
        />
      )}
      {bottomProfileButton && (
        <IconModal
          clicked={bottomProfileButton}
          setClicked={setBottomProfileButton!}
          title={'Alexander R. Ma (Arexma)'}
          body={'I loveeee TFT'}
        />
      )}
    </div>
  );
};
