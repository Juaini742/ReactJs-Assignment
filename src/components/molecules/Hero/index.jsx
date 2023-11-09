import { Button } from "../../atom/index";

function HeroSection() {
  return (
    <>
      <div className="container h-96 pt-28 flex items-center text-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary text-shadow">
            Warung Makan Pak MAMAT
          </h2>
          <p className="my-5 w-full md:w-[700px] text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, amet
            quo excepturi atque voluptate deleniti veritatis deserunt itaque
            labore suscipit aspernatur molestiae perspiciatis dolores enim,
            cumque quibusdam facere sunt sequi.
          </p>

          <a href="" className="btn-primary py-1 px-10">
            GitHub
          </a>
          <Button variant="outline" className="ml-2 px-4">
            see our menus
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
