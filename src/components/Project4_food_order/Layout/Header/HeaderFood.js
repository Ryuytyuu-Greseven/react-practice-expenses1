import { Fragment } from "react";

import classes from "./Header.module.css";
import viceSnow from "../../../../assets/snow_king.png";
import HeaderCardButtonFood from "../HeaderCardButton/HeaderCardButton";

const HeaderFood = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Vice City Delivery Service</h1>
        <HeaderCardButtonFood />
      </header>
      <div className={classes["main-image"]}>
        <img src={viceSnow} alt="GTA with in snow day around a hill!" />
      </div>
    </Fragment>
  );
};

export default HeaderFood;
