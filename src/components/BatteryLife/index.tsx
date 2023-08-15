import React, { useContext } from 'react';
import Battery from '../../assets/images/battery-full-outline.svg';
import styles from './BatteryLife.module.scss';

export const BatteryLife = () => {
  return (
    <div className={styles.BatteryLife}>
      <div>
        <img src={Battery}></img>
        <h1>{new Date().toLocaleTimeString().slice(0, -6)}</h1>
      </div>
    </div>
  );
};
