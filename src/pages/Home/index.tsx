import React, { useContext, useState } from 'react';
import EnterMain from '../../components/Enter_Main';
import { AboutUs } from '../AboutUs';
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
