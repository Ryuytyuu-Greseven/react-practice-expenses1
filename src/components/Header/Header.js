import Button2 from "../Project2/UI/Button/Button2";
import Card2 from "../Project2/UI/Card/Card2";

import classes from "./Header.module.css";

const Header = (props) => {
  const userSelectUser = () => {
    props.selectNavigation("users");
  };
  const userSelectExpense = () => {
    props.selectNavigation("expenses");
  };
  const userSelectLogin = () => {
    props.selectNavigation("userlogin");
  };
  const userSelectFoodOrder = () => {
    props.selectNavigation("foodorder");
  };

  return (
    <Card2 className={classes.border}>
      <Button2
        type="button"
        className={`${classes.button} ${
          props.header === "expenses" ? classes.active : ""
        }`}
        onClick={userSelectExpense}
      >
        Expenses
      </Button2>
      <Button2
        type="button"
        className={`${classes.button} ${
          props.header === "users" ? classes.active : ""
        }`}
        onClick={userSelectUser}
      >
        User
      </Button2>
      <Button2
        type="button"
        className={`${classes.button} ${
          props.header === "userlogin" ? classes.active : ""
        }`}
        onClick={userSelectLogin}
      >
        User Login
      </Button2>
      <Button2
        type="button"
        className={`${classes.button} ${
          props.header === "foodorder" ? classes.active : ""
        }`}
        onClick={userSelectFoodOrder}
      >
        Vice City Food Order
      </Button2>
    </Card2>
  );
};

export default Header;
