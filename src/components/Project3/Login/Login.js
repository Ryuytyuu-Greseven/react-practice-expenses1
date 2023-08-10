import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import classes from "./Login.module.css";
import Button2 from "../../Project2/UI/Button/Button2";
import Card2 from "../../Project2/UI/Card/Card2";
import AuthContext from "../../contexts/auth-context";
import Input from "../../UI/Cards/Input/Input";

// just a simple function, we should use to maintain state with the Reducers
// always this functions gets called when ever we dispatch(update) a value
// also gets invocked initially to return the default state value
const emailStateHandler = (state, action) => {
  console.log(state, action);
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};
const passwordStateHandler = (state, action) => {
  console.log(state, action);
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // use reducers
  const [emailFormState, emailDispatchHandler] = useReducer(emailStateHandler, {
    value: "",
    isValid: false,
  });
  const [passwordFormState, passwordDispatchHandler] = useReducer(
    passwordStateHandler,
    { value: "", isValid: false }
  );

  // use refs for referencing the input field
  const emailRef = useRef();
  const passwordRef = useRef();

  // auth context
  const authCtx = useContext(AuthContext);
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
      emailFormState.value.includes("@") &&
        passwordFormState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    passwordDispatchHandler({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      passwordFormState.value.trim().length > 6 &&
        emailFormState.value.includes("@")
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailFormState.isValid);
    emailDispatchHandler({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    passwordDispatchHandler({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailFormState.value, passwordFormState.value);
    } else if (!emailFormState.isValid) {
      // email is not valid
      emailRef.current.focusField();
    } else {
      // password is not valid
      passwordRef.current.focusField();
    }
  };

  return (
    <Card2 className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          label={"E-Mail"}
          type={"email"}
          value={emailFormState.value}
          id={"email"}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        {/* <div
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
        </div> */}
        <Input
          ref={passwordRef}
          label={"Password"}
          type={"password"}
          value={passwordFormState.value}
          id={"password"}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        {/* <div
          className={`${classes.control} ${
            passwordFormState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordFormState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        <div className={classes.actions}>
          <Button2
            type="submit"
            // disabled={!formIsValid}
          >
            Login
          </Button2>
        </div>
      </form>
    </Card2>
  );
};

export default Login;
