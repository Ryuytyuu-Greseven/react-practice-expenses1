import React, { useEffect, useReducer, useState } from "react";

import classes from "./Login.module.css";
import Button2 from "../../Project2/UI/Button/Button2";
import Card2 from "../../Project2/UI/Card/Card2";

// just a simple function, we should use to maintain state with the Reducers
// always this functions gets called when ever we dispatch(update) a value
// also gets invocked initially to return the default state value
const emailStateHandler = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // use reducers
  const [emailFormState, emailDispatchHandler] = useReducer(emailStateHandler, {
    value: "",
    isValid: false,
  });

  // use effect
  // -- commented to use useReducer
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //     console.log("email");
  //   }, 500);

  //   return () => {
  //     console.log("clearing timeout");
  //     clearTimeout(timer);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    emailDispatchHandler({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      emailFormState.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && emailFormState.value.includes("@")
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailFormState.isValid);
    emailDispatchHandler({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailFormState.value, enteredPassword);
  };

  return (
    <Card2 className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailFormState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailFormState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button2
            type="submit"
            className={classes.btn}
            disabled={!formIsValid}
          >
            Login
          </Button2>
        </div>
      </form>
    </Card2>
  );
};

export default Login;
