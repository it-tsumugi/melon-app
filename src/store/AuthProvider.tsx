import React, { createContext, useContext, useState, FC } from "react";

const AuthContext = createContext(
  {} as {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

type propsType = {
  children: React.ReactNode;
};

export const AuthProvider: FC<propsType> = (props) => {
  const { children } = props;
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
