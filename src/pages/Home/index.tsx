import React, { useState } from 'react';
import EnterMain from '../../components/Enter_Main';
import { AboutUs } from '../AboutUs';

export const Home = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      {!clicked && <EnterMain enterClicked={clicked} setEnterClick={setClicked} />}
      {clicked && <AboutUs />}
    </div>
  );
};
