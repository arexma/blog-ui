import React, { useContext } from 'react';
import adventure from '../../assets/images/adventure.png';
import heroes from '../../assets/images/body-outline.svg';
import recruit from '../../assets/images/bonfire-outline.svg';
import guild from '../../assets/images/beer-outline.svg';
import shop from '../../assets/images/bag-outline.svg';
import styles from './HomeButtomUI.module.scss';

export const HomeBottomUI = () => {
  return (
    <div className={styles.HomeBottomUI}>
      <div className={styles.LeftSide}>
        <img src={shop}></img>
        <img src={recruit}></img>
        <img src={heroes}></img>
        <img src={guild}></img>
      </div>
      <div className={styles.RightSide}>
        <a href="/adventure">
          <img src={adventure}></img>
        </a>
      </div>
    </div>
  );
};
