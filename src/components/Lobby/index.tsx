import React, { useContext } from 'react';
import { Banner } from '../Banner';
import { BatteryLife } from '../BatteryLife';
import { IconModal } from '../IconModal';
import { PlayerInfo } from '../PlayerInfo';
import { HomeBottomUI } from '../HomeBottomUI';
import { Footer } from '../Footer';
import { GlobalContext } from '../../GlobalContext/context';
import styles from './Lobby.module.scss';
import { UtilityIcons } from '../UtilityIcons';

export const Lobby = () => {
  const { topProfileButton, setTopProfileButton, bottomProfileButton, setBottomProfileButton } =
    useContext(GlobalContext);

  return (
    <div className={styles.AboutUs}>
      <div className={styles['row-one']}>
        <PlayerInfo />
        <div>
          {/*TODO: Replace with an actual currency component*/}
          <h1>(------Currency------)</h1>
          <BatteryLife />
          <Banner />
          <UtilityIcons />
        </div>
      </div>
      <div className={styles['row-two']}></div>
      <div className={styles['row-three']}>
        <HomeBottomUI />
      </div>
      <div className={styles['row-four']}>
        <Footer />
      </div>
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
