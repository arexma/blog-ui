import React, { useContext } from 'react';
import adventure from '../../assets/images/adventure.png';
import heroes from '../../assets/images/body-outline.svg';
import recruit from '../../assets/images/bonfire-outline.svg';
import guild from '../../assets/images/beer-outline.svg';
import shop from '../../assets/images/bag-outline.svg';
import styles from './HomeButtomUI.module.scss';

import { useNavigate } from 'react-router-dom';

export const HomeBottomUI = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.HomeBottomUI}>
      <div className={styles.LeftSide}>
        <img src={shop}></img>
        <img src={recruit}></img>
        <img src={heroes}></img>
        <img src={guild}></img>
      </div>
      <div className={styles.RightSide}>
        <img onClick={() => navigate('/adventure')} src={adventure}></img>
      </div>
    </div>
  );
};
