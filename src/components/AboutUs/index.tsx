import React, { useContext, useState } from 'react';
import { IconModal } from '../IconModal';
import icon from '../../assets/images/master.png';
import { GlobalContext } from '../../GlobalContext/context';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  const { profileButton, setProfileButton } = useContext(GlobalContext);

  return (
    <div className={styles.AboutUs}>
      <button onClick={() => setProfileButton!(true)}>
        <img src={icon} />
      </button>
      {profileButton && <IconModal />}
    </div>
  );
};
