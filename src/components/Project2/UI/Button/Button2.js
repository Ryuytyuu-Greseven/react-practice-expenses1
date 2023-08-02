import classes from "./Button2.module.css";

function Button2(props) {
  return (
    <button
      className={classes.button}
      type={props.type | "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button2;
