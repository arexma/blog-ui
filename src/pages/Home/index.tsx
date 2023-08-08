import React, { useContext, useState } from 'react';
import EnterMain from '../../components/EnterMain';
import { AboutUs } from '../../components/AboutUs';
import { GlobalContext } from '../../GlobalContext/context';

export const Home = () => {
  const { startButton } = useContext(GlobalContext);

  return (
    <div>
      {!startButton && <EnterMain />}
      {startButton && <AboutUs />}
    </div>
  );
};
