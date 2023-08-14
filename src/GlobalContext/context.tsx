import React, { useState, useContext, FC } from 'react';

interface IGlobalContext {
  startButton: boolean;
  setStartButton: React.Dispatch<React.SetStateAction<boolean>>;
  leftProfileButton: boolean;
  setLeftProfileButton: React.Dispatch<React.SetStateAction<boolean>>;
  rightProfileButton: boolean;
  setRightProfileButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = React.createContext<Partial<IGlobalContext>>({});

interface Props {
  children: React.ReactNode;
}

export const GlobalProvider: FC<Props> = ({ children }) => {
  const [startButton, setStartButton] = useState<boolean>(false);
  const [leftProfileButton, setLeftProfileButton] = useState<boolean>(false);
  const [rightProfileButton, setRightProfileButton] = useState<boolean>(false);
  return (
    <GlobalContext.Provider
      value={{
        startButton,
        setStartButton,
        leftProfileButton,
        setLeftProfileButton,
        rightProfileButton,
        setRightProfileButton,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
