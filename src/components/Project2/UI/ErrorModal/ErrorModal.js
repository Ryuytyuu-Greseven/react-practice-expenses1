import Button2 from "../Button/Button2";
import Card2 from "../Card/Card2";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card2 className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button2 onClick={props.closeModal}>Close Me</Button2>
        </footer>
      </Card2>
    </div>
  );
};

export default ErrorModal;
