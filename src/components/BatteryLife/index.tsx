import React, { useEffect, useState } from 'react';
import Battery from '../../assets/images/battery-full-outline.svg';
import styles from './BatteryLife.module.scss';

export const BatteryLife = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div className={styles.BatteryLife}>
      <div>
        <img src={Battery}></img>
        <h1>{formattedTime}</h1>
      </div>
    </div>
  );
};
