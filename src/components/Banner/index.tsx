import React, { useContext, useEffect, useState } from 'react';
import styles from './Banner.module.scss';
import Blog1 from '../../assets/images/master.png';
import Blog2 from '../../assets/images/hololive_en_non_fiction.svg';
import Blog3 from '../../assets/images/loi_pfp.jpg';
const Blog4 = '';
export const Banner = () => {
  // Banners will be path names to whatever blog posts we're currently showing
  // Blog path --> img path
  const banners: { [path: string]: string } = { '/': Blog1, '/1': Blog2, '/2': Blog3, '/3': Blog4 };

  const [clicked, setClicked] = useState<string>('/');
  const keys = Object.keys(banners);
  let intervalID: NodeJS.Timeout | undefined = undefined;

  const startInterval = () => {
    intervalID = setInterval(() => {
      setClicked(clicked => keys[(keys.findIndex(element => element === clicked) + 1) % keys.length]);
    }, 5000);
  };

  const handleClicked = (path: string) => {
    clearInterval(intervalID);
    setClicked(path);
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, [clicked]);

  return (
    <div className={styles.Banner}>
      <input type="image" src={banners[clicked]}></input>
      <div>
        {Object.keys(banners).map((path: string) => (
          <input type="radio" key={path} onChange={() => handleClicked(path)} checked={path === clicked} />
        ))}
        {/* Maybe memo input tag for performance optimization */}
      </div>
    </div>
  );
};
