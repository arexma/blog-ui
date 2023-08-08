import React, { useState, useContext, FC } from 'react';

interface IGlobalContext {
  startButton: boolean;
  setStartButton: React.Dispatch<React.SetStateAction<boolean>>;
  profileButton: boolean;
  setProfileButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = React.createContext<Partial<IGlobalContext>>({});

interface Props {
  children: React.ReactNode;
}

export const GlobalProvider: FC<Props> = ({ children }) => {
  const [startButton, setStartButton] = useState(false);
  const [profileButton, setProfileButton] = useState(false);

  return (
    <GlobalContext.Provider value={{ startButton, setStartButton, profileButton, setProfileButton }}>
      {children}
    </GlobalContext.Provider>
  );
};
