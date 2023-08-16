import React, { useContext, useState } from 'react';
import styles from './Banner.module.scss';
import TFT from '../../assets/images/master.png';
import Hololive from '../../assets/images/hololive_en_non_fiction.svg';
import Loi from '../../assets/images/loi_pfp.jpg';

export const Banner = () => {
  // Banners will be path names to whatever blog posts we're currently showing
  const banners: { [path: string]: string } = { '/': TFT, '/1': Hololive, '/2': Loi, '/3': '' };
  // Blog path --> img path
  const [clicked, setClicked] = useState<string>('/');

  return (
    <div className={styles.Banner}>
      <input type="image" src={banners[clicked]}></input>
      <div>
        {Object.keys(banners).map((path: string) => (
          <input type="radio" key={path} onChange={() => setClicked(path)} checked={path === clicked} />
        ))}
      </div>
    </div>
  );
};
