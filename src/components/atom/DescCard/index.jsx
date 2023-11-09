/* eslint-disable react/prop-types */
function DescriptionCard(props) {
  const { head, desc } = props;
  return (
    <div className="card">
      <h3 className="text-lg my-2 text-primary font-semibold">{head}</h3>
      <p className="text-sm leading-5">{desc}</p>
    </div>
  );
}

export default DescriptionCard;
