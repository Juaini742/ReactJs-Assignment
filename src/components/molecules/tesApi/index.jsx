/* eslint-disable react/prop-types */
import { Form, Input, TreeSelect } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OutlineButton from "../../atom/OutlineButton";
import ButtonPrimary from "../../atom/Button";
import { getProvAction } from "../../../store/actions/prov.action";
import { getKabAction } from "../../../store/actions/kab.action";
import { getKecAction } from "../../../store/actions/kec.action";
import { getKelAction } from "../../../store/actions/kel.ation";
import { savePurchase } from "../../../store/actions/purchase.action";
import { useState } from "react";

function BasketForm(props) {
  const { baskets, handleShowPurchase, totalPriceBasket } = props;
  const dispatch = useDispatch();
  const prov = useSelector((state) => state.prov.prov);
  const kab = useSelector((state) => state.kab.kab);
  const kec = useSelector((state) => state.kec.kec);
  const kel = useSelector((state) => state.kel.kel);

  const [formData, setFormData] = useState({
    product: "",
    price: totalPriceBasket,
    name: "",
    selectedProvinsi: "",
    selectedKab: "",
    selectedKec: "",
    selectedKel: "",
    address: "",
    gMap: "",
  });

  useEffect(() => {
    if (baskets.length > 0) {
      const allProducts = baskets.map((item) => item.titleMenu);
      const concatenatedProducts = allProducts.join(", ");
      setFormData({
        ...formData,
        product: concatenatedProducts,
      });
    }
  }, [baskets]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleInputAddress = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleInputGmap = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddPurchase = () => {
    dispatch(savePurchase(formData));
  };

  const handleProvChange = (value) => {
    const selectedProvName = prov.find((item) => item.id === value)?.name || "";
    setFormData({
      ...formData,
      selectedProvinsi: selectedProvName,
    });
    dispatch(getKabAction(value));
  };

  const handleKabChange = (value) => {
    const selectedKabName = kab.find((item) => item.id === value)?.name || "";
    setFormData({
      ...formData,
      selectedKab: selectedKabName,
    });
    dispatch(getKecAction(value));
  };

  // const handleKecChange = (value) => {
  //   const selectedKecName =
  //     kec.find((item) => item.id === value.id)?.name || "";
  //   setFormData({
  //     ...formData,
  //     selectedKec: selectedKecName,
  //   });
  //   dispatch(getKelAction(value));
  // };

  // const handleKecChange = (value) => {
  //   const selectedKecName =
  //     kec.find((item) => item.id === value)?.name || value;
  //   setFormData({
  //     ...formData,
  //     selectedKec: selectedKecName,
  //   });
  //   dispatch(getKelAction(value));
  //   console.log(selectedKecName);
  // };

  const handleKecChange = (value) => {
    // Mengambil ID Kecamatan (diasumsikan format ID: kecamatanId.kelurahanId)
    const kecamatanId = value.split(".")[0]; // Mengambil bagian ID kecamatan saja

    const selectedKecName =
      kec.find((item) => item.id === kecamatanId)?.name || "";
    setFormData({
      ...formData,
      selectedKec: selectedKecName,
    });

    // Memperbarui ID kecamatan yang benar (tanpa bagian ID kelurahan) untuk digunakan dalam aksi selanjutnya
    dispatch(getKelAction(kecamatanId));
  };

  const handleKelurahanChange = (value) => {
    const selectedKelName = kel.find((item) => item.id === value)?.name || "";
    setFormData({
      ...formData,
      selectedKel: selectedKelName,
    });
    dispatch(getKelAction(value));
  };

  // Di dalam return:
  // <Form.Item label="Kelurahan">
  //   <TreeSelect treeData={treeDataKel} onChange={handleKelurahanChange} />
  // </Form.Item>

  // const handleKelChange = (value) => {
  //   setFormData({
  //     ...formData,
  //     selectedKec: value,
  //   });
  //   dispatch(getKelAction(value));
  //   console.log("oke");
  // };
  // const handleKecChange = (value) => {
  //   setFormData({
  //     ...formData,
  //     selectedKec: value,
  //   });
  //   dispatch(getKelAction(value));
  // };

  const convertToTreeData = (data) => {
    return data.map((item) => ({
      title: item.name,
      value: item.id,
      key: item.id,
      children: item.children,
    }));
  };
  const treeData = convertToTreeData(prov);
  const treeDataKab = convertToTreeData(kab);
  const treeDataKec = convertToTreeData(kec);
  const treeDataKel = convertToTreeData(kel);

  return (
    <div className="w-screen h-screen fixed bottom-0 z-[999] bg-white/50 backdrop-blur-md">
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="mt-6 ml-8"
      >
        <Form.Item label="List of Food">
          {baskets.map((item) => (
            <li key={item.id} value={item.titleMenu}>
              {item.titleMenu}
            </li>
          ))}
        </Form.Item>

        <Form.Item label="Price Total">IDR. {totalPriceBasket}</Form.Item>

        <Form.Item label="Name">
          <Input
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            name="name"
          />
        </Form.Item>

        <Form.Item label="Provinsi">
          <TreeSelect treeData={treeData} onChange={handleProvChange} />
        </Form.Item>

        <Form.Item label="Kabupaten">
          <TreeSelect treeData={treeDataKab} onChange={handleKabChange} />
        </Form.Item>

        <Form.Item label="Kecamatan">
          <TreeSelect treeData={treeDataKec} onChange={handleKecChange} />
        </Form.Item>

        <Form.Item label="Kelurahan">
          <TreeSelect treeData={treeDataKel} onChange={handleKelurahanChange} />
        </Form.Item>

        <Form.Item label="addres">
          <Input.TextArea
            value={formData.address}
            onChange={handleInputAddress}
            name="address"
          />
        </Form.Item>

        <Form.Item label="Gmap link">
          <Input
            type="text"
            value={formData.gMap}
            onChange={handleInputGmap}
            name="gMap"
          />
        </Form.Item>

        <Form.Item label=".">
          <ButtonPrimary
            onClick={handleAddPurchase}
            text="purchase"
            className="px-5 "
          />
          <OutlineButton
            onClick={() => handleShowPurchase()}
            text="cancel"
            className="px-5 ml-2"
          />
        </Form.Item>
      </Form>
    </div>
  );
}

export default BasketForm;
