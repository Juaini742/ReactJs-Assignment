/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  TitleHead,
  HeadDescCard,
  DescriptionCard,
  Container,
  LeftIn,
  RightIn,
} from "../../atom/index";

function AboutSection() {
  return (
    <section>
      <Container className="my-10 overflow-hidden">
        <TitleHead>About</TitleHead>
        <Card variant="grid-1-2" className="gap-10">
          <LeftIn>
            <div className="flex flex-col justify-evenly">
              <HeadDescCard
                head="Delight in Every Bite at Our Dining Haven"
                desc="Emphasizes the pleasant and captivating experience created through
              every dish served at your restaurant. It signifies that customers
              will enjoy pleasure with every bite at your comfortable and
              enjoyable dining place."
              />
              <img src="img/about1.jpg" alt="About 1" className="rounded-xl" />
            </div>
          </LeftIn>

          <RightIn>
            <div className="flex md:flex-col flex-col-reverse">
              <img src="img/about2.jpg" alt="About 2" className="rounded-xl" />
              <DescriptionCard
                head=" Exquisite Flavors, Unmatched Quality"
                desc=" Highlights exceptional flavors and unparalleled quality of the
              dishes offered at your restaurant."
              />
              <DescriptionCard
                head="  Committed to Culinary Excellence"
                desc="   Shows dedication to achieving culinary perfection, highlighting
              the quality and expertise in the presented culinary art."
              />
            </div>
          </RightIn>
        </Card>
      </Container>
    </section>
  );
}

export default AboutSection;
