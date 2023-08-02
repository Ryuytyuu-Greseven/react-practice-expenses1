import Button2 from "../UI/Button/Button2";
import Card2 from "../UI/Card/Card2";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card2 className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age Years</label>
        <input id="age" type="number" />
        <Button2 type="submit">Add User</Button2>
      </form>
    </Card2>
  );
};

export default AddUser;
