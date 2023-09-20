import React, { useContext, useState } from 'react';
import { Lobby } from '../../components/Lobby';
import { GlobalContext } from '../../GlobalContext/context';
import { Footer } from '../../components/Footer';
import { NavigateBack } from '../../components/NavigateBack';
import styles from './Adventure.module.scss';

export const Adventure = () => {
  return (
    <div className={styles.Adventure}>
      <div className={styles['row-one']}>
        <div></div>
        <div>
          <NavigateBack />
        </div>
      </div>
      <div className={styles['row-two']}></div>
      <div className={styles['row-three']}>
        <Footer />
      </div>
    </div>
  );
};
