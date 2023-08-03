import { useRef, useState } from "react";
import Button2 from "../UI/Button/Button2";
import Card2 from "../UI/Card/Card2";

import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";

const AddUser = (props) => {
  // const [username, setUserName] = useState("");
  // const [userage, setUserAge] = useState("");

  // use refs
  const userNameEntered = useRef();
  const userAgeEntered = useRef();

  // error modal states
  const [displayErrorModal, setError] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(userNameEntered, userAgeEntered);
    if (
      !userNameEntered.current.value.length ||
      !userAgeEntered.current.value.length ||
      +userAgeEntered.current.value < 1
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid details",
      });
      return false;
    }
    console.log(userNameEntered.current.value, userAgeEntered.current.value);

    const newUser = {
      username: userNameEntered.current.value,
      userage: userAgeEntered.current.value,
    };
    props.addUser(newUser);

    // reset ref values
    userNameEntered.current.value = "";
    userAgeEntered.current.value = "";

    // resetting the state
    // setUserAge("");
    // setUserName("");
  };

  // const ageChangeHandler = (event) => {
  //   setUserAge(event.target.value);
  // };
  // const usernameChangeHandler = (event) => {
  //   setUserName(event.target.value);
  // };

  // error modal state udpates
  const closeErrorModal = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            // value={username}
            // onChange={usernameChangeHandler}
            ref={userNameEntered}
          />
          <label htmlFor="age">Age Years</label>
          <input
            id="age"
            type="number"
            // value={userage}
            // onChange={ageChangeHandler}
            ref={userAgeEntered}
          />
          <Button2 type="submit">Add User</Button2>
        </form>
      </Card2>
    </Wrapper>
  );
};

export default AddUser;
