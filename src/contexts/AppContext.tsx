import * as React from 'react';

interface IAppContext {
  counter: 0;
  setCounter: (value: number) => void;
}

interface IProps{
  children: React.ReactNode;
}

const AppContext = React.createContext<IAppContext | undefined>(undefined);

const AppProvider = ({ children }: IProps) => {
    const [counter, setCounter] = React.useState<number>(0);
    const value = {
      counter,
      setCounter,
    } as IAppContext;
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };