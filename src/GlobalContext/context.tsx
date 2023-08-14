import React, { useState, useContext, FC } from 'react';

interface IGlobalContext {
  startButton: boolean;
  setStartButton: React.Dispatch<React.SetStateAction<boolean>>;
  topProfileButton: boolean;
  setTopProfileButton: React.Dispatch<React.SetStateAction<boolean>>;
  bottomProfileButton: boolean;
  setBottomProfileButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = React.createContext<Partial<IGlobalContext>>({});

interface Props {
  children: React.ReactNode;
}

export const GlobalProvider: FC<Props> = ({ children }) => {
  const [startButton, setStartButton] = useState<boolean>(false);
  const [topProfileButton, setTopProfileButton] = useState<boolean>(false);
  const [bottomProfileButton, setBottomProfileButton] = useState<boolean>(false);
  return (
    <GlobalContext.Provider
      value={{
        startButton,
        setStartButton,
        topProfileButton,
        setTopProfileButton,
        bottomProfileButton,
        setBottomProfileButton,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
