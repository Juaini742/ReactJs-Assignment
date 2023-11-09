import { Card } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchaseAction } from "../../../store/actions/purchaseShow";

function PurchaseSection() {
  const dispatch = useDispatch();
  const purchase = useSelector((state) => state.purchase.purchase);

  useEffect(() => {
    dispatch(getPurchaseAction());
  }, [dispatch]);

  return (
    <>
      <div className="container flex flex-col-reverse">
        {purchase.map((item) => (
          <Card
            key={item.id}
            title="History"
            className="shadow-lg w-full mb-2"
            bordered={true}
          >
            <h3>Name: {item.name}</h3>
            <h4>
              Product: <span>{item.product}</span>
            </h4>
            <h3>Price Total: {item.price}</h3>
            <h3>Provinsi: {item.selectedProvinsi}</h3>
            <h3>Kabupaten: {item.selectedKab}</h3>
            <h3>Kecamatan: {item.selectedKec}</h3>
            <h3>Kelurahan: {item.selectedKel}</h3>
            <h3>Address: {item.address}</h3>
            <h3>
              gMap Link:{" "}
              <a
                href={item.gMap}
                className="border-b-2 border-primary text-primary"
              >
                {item.gMap}
              </a>
            </h3>
          </Card>
        ))}
      </div>
    </>
  );
}

export default PurchaseSection;
