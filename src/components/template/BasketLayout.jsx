import BasketData from "../molecules/Basket";
import NavbarComp from "../molecules/NavigationBar";
// import { Link } from "react-router-dom";
import FooterContent from "../organism/Footer";

function BasketLayout() {
  return (
    <>
      <NavbarComp />
      <BasketData />
      {/* <div className="my-96"></div>
      <Link to="/home" className="btn-outline-primary px-5">
        Back to Home
      </Link>
      <div className="my-96"></div> */}
      <FooterContent />
    </>
  );
}

export default BasketLayout;
