/* eslint-disable react/prop-types */
function InputBorder(props) {
  const { text, type, id, name, value, onChange } = props;
  return (
    <>
      <label htmlFor="username" className="block my-3 text-xl">
        {text}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-10 rounded-md bg-transparent border p-2"
      />
    </>
  );
}

export default InputBorder;
