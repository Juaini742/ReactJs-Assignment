import NavbarComp from "../../molecules/NavigationBar/index";
import HeroSection from "../../molecules/Hero/index";

function Header() {
  return (
    <>
      <div
        className="w-full h-[550px] bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(img/hero1.jpg)" }}
      >
        <NavbarComp />
        <HeroSection />
      </div>
    </>
  );
}

export default Header;
