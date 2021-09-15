import classes from './css/Card.module.css';

// UI component to show card effect that uses this.
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
