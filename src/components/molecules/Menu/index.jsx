import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataProductsAction } from "../../../store/actions/products.action";
import { saveBasket } from "../../../store/actions/basket.sction";
import { Button, TitleHead, Card, Card_Body } from "../../atom/index";

function MenuSection() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [selectedCategory, setSelectedCategory] = useState("Makanan");

  useEffect(() => {
    dispatch(getDataProductsAction());
  }, [dispatch]);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const handleAddToBasket = (product) => {
    dispatch(saveBasket(product));
  };
  return (
    <>
      <div
        className="mt-32  bg-cover"
        style={{ backgroundImage: "url(img/Rectangle35.jpg)" }}
      >
        <div className="container flex-col-center p-2 py-40">
          <TitleHead>Our Menu</TitleHead>
          <div className="flex gap-3 mb-6 border-b-4 border-primary">
            <Button onClick={() => filterByCategory("Makanan")}>Makanan</Button>
            <Button onClick={() => filterByCategory("Minuman")}>Minuman</Button>
            <Button onClick={() => filterByCategory("Cemilan")}>Cemilan</Button>
          </div>
          <Card variant="grid-1-3-5" className="gap-5">
            {filteredProducts.map((product) => (
              <Card_Body
                key={product.id}
                variant="backdrop"
                className="flex-col-center max-w-xs h-96 p-2"
              >
                <img src={product.imgMenu} alt="" width={200} />
                <h4 className="text-lg mt-4 mb-2">{product.titleMenu}</h4>
                <h3 className="text-xl font-semibold mb-3">
                  IDR. {product.priceMenu}
                </h3>

                <Button
                  onClick={() => handleAddToBasket(product)}
                  variant="outline"
                  className="px-5"
                >
                  purchase
                </Button>
              </Card_Body>
            ))}
          </Card>
        </div>
      </div>
    </>
  );
}

export default MenuSection;
