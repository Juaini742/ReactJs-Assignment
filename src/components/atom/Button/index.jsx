/* eslint-disable react/prop-types */
function Button(props) {
  const { type, children, className, onClick, variant } = props;
  let buttonStyle = "";

  switch (variant) {
    case "primary":
      buttonStyle += "btn-primary";
      break;
    case "outline":
      buttonStyle += "btn-outline-primary";
      break;
    case "danger":
      buttonStyle += "btn-danger";
      break;
    default:
      buttonStyle += "";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonStyle} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
