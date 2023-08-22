import React, { useContext } from 'react';
import LinkedIn from '../../assets/images/logo-linkedin.svg';
import Github from '../../assets/images/logo-github.svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.AboutUs}>
        <h6>About Us</h6>
      </div>
      <div className={styles.Row}>
        <div className={styles.Alexander}>
          <h6>Alexander Ma:</h6>
          <a href={'https://www.linkedin.com/in/alexander-ma-2956a2216/'} target={'_blank'}>
            <img src={LinkedIn}></img>
          </a>
          <a href={'https://github.com/arexma'} target={'_blank'}>
            <img src={Github}></img>
          </a>
        </div>
        <div className={styles.Loi}>
          <h6>Loi Nguyen:</h6>
          <a href={'https://www.linkedin.com/in/loi-nguyen-9aaa14252/'} target={'_blank'}>
            <img src={LinkedIn}></img>
          </a>
          <a href={'https://github.com/LoiVNguyen'} target={'_blank'}>
            <img src={Github}></img>
          </a>
        </div>
        <div className={styles.Extra}>
          <h6>Privacy Policy</h6>
        </div>
      </div>
    </div>
  );
};
