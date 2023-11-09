/* eslint-disable react/prop-types */
function Container(props) {
  const { className, children } = props;

  const clasStyle = "container";

  return <div className={`${clasStyle} ${className}`}>{children}</div>;
}

export default Container;
