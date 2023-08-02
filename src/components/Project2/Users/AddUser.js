import { useState } from "react";
import Button2 from "../UI/Button/Button2";
import Card2 from "../UI/Card/Card2";

import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [username, setUserName] = useState("");
  const [userage, setUserAge] = useState("");

  // error modal states
  const [displayErrorModal, setError] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!username.length || !userage.length || +userage < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid details",
      });
      return false;
    }
    console.log(username, userage);
    const newUser = {
      username,
      userage,
    };
    props.addUser(newUser);
    setUserAge("");
    setUserName("");
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };
  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  // error modal state udpates
  const closeErrorModal = () => {
    setError(null);
  };

  return (
    <div>
      {displayErrorModal && (
        <ErrorModal
          title={displayErrorModal.title}
          message={displayErrorModal.message}
          closeModal={closeErrorModal}
        />
      )}

      <Card2 className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age Years</label>
          <input
            id="age"
            type="number"
            value={userage}
            onChange={ageChangeHandler}
          />
          <Button2 type="submit">Add User</Button2>
        </form>
      </Card2>
    </div>
  );
};

export default AddUser;
