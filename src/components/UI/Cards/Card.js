import "./Card.css";

// this is just an encapsulation class. can be used anywhere in application to get smooth edges to div
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
