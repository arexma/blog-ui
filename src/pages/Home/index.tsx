import React, { useState } from 'react';
import EnterMain from '../../components/Enter_Main';

function Home() {
  const [clicked, setClicked] = useState(true);
  return (
    <div>
      {clicked && <EnterMain enterClicked={clicked} setEnterClick={setClicked} />}
      {!clicked && <h1>TESTTEST</h1>}
    </div>
  );
}

export default Home;
