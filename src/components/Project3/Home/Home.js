import React, { useContext } from "react";

import classes from "./Home.module.css";
import Card2 from "../../Project2/UI/Card/Card2";
import Button2 from "../../Project2/UI/Button/Button2";
import AuthContext from "../../contexts/auth-context";

const Home = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Card2 className={classes.home}>
      <h1>Welcome back!</h1>
      <Button2 onClick={authCtx.onLogout}>Logout</Button2>
    </Card2>
  );
};

export default Home;
