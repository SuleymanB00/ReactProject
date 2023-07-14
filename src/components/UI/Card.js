import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className;
  return (
    <div className={classes}>{props.children}</div> //зарезервированный props(children)так как тут не работаем с атрибутами.Значением является то что находится между открывающим и закрывающими тегами Card в CardItems.js
  );
}
export default Card;
