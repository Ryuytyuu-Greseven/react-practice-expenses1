import classes from "./Button2.module.css";

function Button2(props) {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type | "button"}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button2;
