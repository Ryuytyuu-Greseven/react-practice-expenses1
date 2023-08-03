import ReactDOM from "react-dom";

import Wrapper from "../../../Helpers/Wrapper";
import Button2 from "../Button/Button2";
import Card2 from "../Card/Card2";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick} />;
  };

  const ModalBody = (props) => {
    return (
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
    );
  };

  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.closeModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalBody
          title={props.title}
          message={props.message}
          closeModal={props.closeModal}
        />,
        document.getElementById("overlay-root")
      )}
    </Wrapper>
  );
};

export default ErrorModal;
