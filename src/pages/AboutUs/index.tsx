import React, { useState } from 'react';
import { IconModal } from '../../components/IconModal';
import icon from '../../assets/images/master.png';
import styles from './AboutUs.module.scss';
export const AboutUs = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div>
      <button style={{ all: 'unset' }} onClick={() => setClicked(true)}>
        <img style={{ borderRadius: '50%', width: '12rem', height: '12rem', cursor: 'pointer' }} src={icon} />
      </button>
      {clicked && <IconModal clicked={clicked} setClicked={setClicked} />}
    </div>
  );
};
