import swal from "sweetalert";
import BasketForm from "../BasketForm";
import { useEffect, useState } from "react";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../store/actions/basketShow.action";
import { deleteBasket } from "../../../store/actions/basketDelete.action";
import { Button, Container } from "../../atom/index";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../../store/reducers/basketShow.reducer";

function BasketData() {
  const dispatch = useDispatch();
  const baskets = useSelector((state) => state.basket.basket);
  const [showPurchase, setShowPurchase] = useState(false);

  useEffect(() => {
    dispatch(addToBasket());
  }, [dispatch]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, your data will be delected iternelly",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your data has been deleted!", {
          icon: "success",
        }).then(() => {
          dispatch(deleteBasket(id));
          window.location.reload();
        });
      } else {
        swal("Your data is safe!");
      }
    });
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const totalPriceBasket = baskets.reduce(
    (total, item) => total + parseFloat(item.priceMenu) * item.quantity,
    0
  );

  const handleShowPurchase = () => {
    setShowPurchase(!showPurchase);
  };

  return (
    <section>
      <Container className="mt-28">
        <Card className="w-[94%] mx-auto fixed z-10 right-0 left-0 top-20">
          <div className=" flex justify-between items-center">
            <h2 className="text-xl">
              Price Total: <strong>{totalPriceBasket}</strong>
            </h2>
            <Button
              onClick={() => handleShowPurchase()}
              className="py-2 px-3 text-lg"
              variant="primary"
            >
              Purchase Now
            </Button>
          </div>
        </Card>
        <div className="mt-52">
          {baskets.map((item) => (
            <Card
              style={{ marginTop: 16 }}
              type="inner"
              key={item.id}
              title={item.titleMenu}
            >
              <div className="flex justify-between items-center flex-wrap-reverse gap-3">
                <div className="">
                  <h3>
                    Price: <strong>{item.priceMenu}</strong>
                  </h3>
                  <h3>
                    Total Price: {parseFloat(item.priceMenu) * item.quantity}
                  </h3>
                  <h3>
                    Quanity: <strong>{item.quantity}</strong>
                  </h3>

                  <Button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="mr-2 px-4"
                    variant="primary"
                  >
                    +
                  </Button>
                  <Button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="px-5"
                    variant="primary"
                  >
                    -
                  </Button>
                  <p>Nutrient:</p>
                  {item.nutrient.map((elm, index) => (
                    <li key={index} className="list-disc">
                      {elm}
                    </li>
                  ))}
                  <p className="max-w-lg leading-6">
                    Description: {item.description}
                  </p>
                  <Button
                    onClick={() => handleDelete(item.id)}
                    className="py-1 px-5 "
                    variant="danger"
                  >
                    delete
                  </Button>
                </div>
                <div className="">
                  <img src={item.imgMenu} alt="" className="rounded-lg" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
      {showPurchase && (
        <BasketForm
          baskets={baskets}
          totalPriceBasket={totalPriceBasket}
          handleShowPurchase={handleShowPurchase}
        />
      )}
    </section>
  );
}

export default BasketData;
