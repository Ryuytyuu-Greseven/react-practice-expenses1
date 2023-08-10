import { Fragment } from "react";

import classes from "./Header.module.css";
import viceSnow from "../../../../assets/snow_king.png";

const HeaderFood = (props) => {
  return (
    <Fragment>
      <header>
        <h1>Vice City Delivery Service</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={viceSnow} alt="GTA with in snow day around a hill!" />
      </div>
    </Fragment>
  );
};

export default HeaderFood;
