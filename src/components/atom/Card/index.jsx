/* eslint-disable react/prop-types */
const Card = (props) => {
  const { variant, className, children } = props;
  let cardStyle = "";

  switch (variant) {
    case "grid-2-4":
      cardStyle += "card-grid-4";
      break;
    case "grid-1-2":
      cardStyle += "card-grid-2";
      break;
    case "grid-1-3-5":
      cardStyle += "card-grid-5";
      break;
    default:
      cardStyle += "";
      break;
  }
  return <div className={`${cardStyle} ${className}`}>{children}</div>;
};

export default Card;
