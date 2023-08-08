import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setUserLoggin] = useState(false);

  const userLoginStatus = sessionStorage.getItem("loginDetails");
  useEffect(() => {
    if (userLoginStatus === "1") {
      setUserLoggin(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    sessionStorage.setItem("loginDetails", "1");
    setUserLoggin(true);
  };

  const logoutHandler = () => {
    sessionStorage.setItem("loginDetails", "0");
    setUserLoggin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
