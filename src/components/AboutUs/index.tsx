import React, { useContext, useState } from 'react';
import { IconModal } from '../IconModal';
import icon from '../../assets/images/master.png';
import { GlobalContext } from '../../GlobalContext/context';

export const AboutUs = () => {
  const { profileButton, setProfileButton } = useContext(GlobalContext);

  return (
    <div>
      <button style={{ all: 'unset' }} onClick={() => setProfileButton!(true)}>
        <img style={{ borderRadius: '50%', width: '12rem', height: '12rem', cursor: 'pointer' }} src={icon} />
      </button>
      {profileButton && <IconModal />}
    </div>
  );
};
