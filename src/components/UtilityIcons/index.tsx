import React from 'react';
import styles from './UtilityIcons.module.scss';
import Chat from '../../assets/images/chatbox-ellipses-outline.svg';
import Notices from '../../assets/images/newspaper-outline.svg';
import Settings from '../../assets/images/settings-outline.svg';
export const UtilityIcons = () => {
  return (
    <div className={styles.UtilityIcons}>
      <button>
        <img src={Chat} alt="Chat Icon" />
      </button>
      <button>
        <img src={Notices} alt="Notices Icon" />
      </button>
      <button>
        <img src={Settings} alt="Settings Icon" />
      </button>
    </div>
  );
};
