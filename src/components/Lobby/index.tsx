import React, { useContext } from 'react';
import { Banner } from '../Banner';
import { BatteryLife } from '../BatteryLife';
import { IconModal } from '../IconModal';
import { PlayerInfo } from '../PlayerInfo';
import { GlobalContext } from '../../GlobalContext/context';
import styles from './Lobby.module.scss';

export const Lobby = () => {
  const { topProfileButton, setTopProfileButton, bottomProfileButton, setBottomProfileButton } =
    useContext(GlobalContext);

  return (
    <div className={styles.AboutUs}>
      <div className={styles['row-one']}>
        <PlayerInfo />
        <div>
          {/*TODO: Replace with an actual currency component*/}
          <h1>(---------Currency---------)</h1>
          <BatteryLife />
          <Banner />
        </div>
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