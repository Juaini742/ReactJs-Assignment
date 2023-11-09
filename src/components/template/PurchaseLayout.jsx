import NavbarComp from "../molecules/NavigationBar";
import FooterContent from "../organism/Footer";
import PurchaseSection from "../molecules/Purchase";

function PurchaseLayout() {
  return (
    <>
      <NavbarComp />
      <div className="my-52"></div>
      <PurchaseSection />
      <div className="my-96"></div>
      <FooterContent />
    </>
  );
}

export default PurchaseLayout;
