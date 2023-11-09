/* eslint-disable react/prop-types */
function HeadDescCard(props) {
  const { head, desc } = props;
  return (
    <>
      <h2 className="text-xl text-primary font-semibold">{head}</h2>
      <p className="text-sm my-2 leading-6 ">{desc}</p>
    </>
  );
}

export default HeadDescCard;
