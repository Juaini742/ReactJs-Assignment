// import { useState } from "react";
// import ButtonPrimary from "../../atom/Button";
// import InputBorder from "../../atom/Input";
import TitleForm from "../../atom/TitleForm";
import Fade from "react-reveal/Fade";
// import { useDispatch } from "react-redux";
// import { postQouteAction } from "../../../store/actions/qouteAdd.action";
import { Form, Input } from "antd";

function FormQoute() {
  // const dispatch = useDispatch();
  // const [qouteData, setQouteData] = useState({
  //   name: "",
  //   rate: "",
  //   qoute: "",
  // });

  // const handleAddQoute = (e) => {
  //   // dispatch(postQouteAction(e));
  // };

  // const handleInputName = (e) => {
  //   const { name, value } = e.target;
  //   setQouteData({
  //     ...qouteData,
  //     [name]: value,
  //   });
  // };
  // const handleInputRate = (e) => {
  //   const { name, value } = e.target;
  //   setQouteData({
  //     ...qouteData,
  //     [name]: value,
  //   });
  // };
  // const handleInputQoute = (e) => {
  //   const { name, value } = e.target;
  //   setQouteData({
  //     ...qouteData,
  //     [name]: value,
  //   });
  // };

  return (
    <>
      <Fade left>
        <div className="card-backdrop">
          <TitleForm text="Qoute Form" />
          <p className=" text-center my-8">add your qoute here</p>
          {/* <form action="">
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
                value={qouteData.qoute}
                onChange={handleInputQoute}
                name="qoute"
                text="Qoute"
              />
            </div>
            <ButtonPrimary
              onClick={() => handleAddQoute(qouteData)}
              className="py-1 px-5"
              text="submit"
            />
          </form> */}

          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            className="mt-6 ml-8"
          >
            <Form.Item label="Field A">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field B">
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Form>
        </div>
      </Fade>
    </>
  );
}

export default FormQoute;






import TitleForm from "../../atom/TitleForm";
import Fade from "react-reveal/Fade";
import { Form, Input } from "antd";

function FormQoute() {
  return (
    <>
      <Fade left>
        <div className="card-backdrop">
          <TitleForm text="Qoute Form" />
          <p className=" text-center my-8">add your qoute here</p>

          <Form layout="vertical" className="mt-6 ml-8">
            <Form.Item label="Field A">
              <Input
                placeholder="input placeholder"
                className="bg-transparent"
              />
            </Form.Item>
            <Form.Item label="Field B">
              <Input
                placeholder="input placeholder"
                className="bg-transparent"
              />
            </Form.Item>
          </Form>
        </div>
      </Fade>
    </>
  );
}

export default FormQoute;
