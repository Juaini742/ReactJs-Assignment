import Header from "../organism/Header/index";
import MainContent from "../organism/Main";
import QoutesSection from "../molecules/Qoutes";
import FormQoute from "../molecules/FormQoute";
import ContactSection from "../molecules/Contact";
import FooterContent from "../organism/Footer";

function HomeLayout() {
  return (
    <>
      <Header />
      <MainContent />
      <QoutesSection />
      <div
        className="bg-cover card-grid-2 p-10 gap-10 overflow-hidden"
        style={{ backgroundImage: "url(img/hero2.jpg)" }}
      >
        <FormQoute />
        <ContactSection />
      </div>
      <FooterContent />
    </>
  );
}

export default HomeLayout;
