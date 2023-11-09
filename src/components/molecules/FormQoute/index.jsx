import { useState } from "react";
import { useDispatch } from "react-redux";
import { postQouteAction } from "../../../store/actions/qouteAdd.action";
import { Card_Body, Button, InputBorder, TitleForm } from "../../atom/index";

function FormQoute() {
  const dispatch = useDispatch();
  const [qouteData, setQouteData] = useState({
    name: "",
    rate: "",
    qoute: "",
  });

  const handleAddQoute = (e) => {
    e.preventDefault();
    dispatch(
      postQouteAction(qouteData, () => {
        window.location.reload();
      })
    );
  };

  const handleInputName = (e) => {
    const { name, value } = e.target;
    setQouteData({
      ...qouteData,
      [name]: value,
    });
  };
  const handleInputRate = (e) => {
    const { name, value } = e.target;
    setQouteData({
      ...qouteData,
      [name]: value,
    });
  };
  const handleInputQoute = (e) => {
    const { name, value } = e.target;
    setQouteData({
      ...qouteData,
      [name]: value,
    });
  };

  return (
    <section>
      <Card_Body variant="card-backdrop">
        <TitleForm>Qoute Form</TitleForm>
        <p className=" text-center my-8">add your qoute here</p>
        <form onSubmit={handleAddQoute}>
          <div className="flex flex-col">
            <InputBorder
              type="text"
              value={qouteData.name}
              onChange={handleInputName}
              name="name"
              text="Name"
            />
          </div>
          <div className="flex flex-col my-4">
            <InputBorder
              type="number"
              value={qouteData.rate}
              onChange={handleInputRate}
              name="rate"
              text="Rate"
            />
          </div>
          <div className="flex flex-col mb-4">
            <InputBorder
              type="text"
              value={qouteData.quote}
              onChange={handleInputQoute}
              name="quote"
              text="Quote"
            />
          </div>
          <Button type="submit" variant="primary" className="py-1 px-5">
            submit
          </Button>
        </form>
      </Card_Body>
    </section>
  );
}

export default FormQoute;
