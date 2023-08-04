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
    </Card2>
  );
};

export default Header;
