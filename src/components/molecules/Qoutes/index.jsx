import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQoutesAction } from "../../../store/actions/qoutes.action";

function QoutesSection() {
  const dispatch = useDispatch();
  const qoutes = useSelector((state) => state.qoute.qoute);

  useEffect(() => {
    dispatch(getQoutesAction());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <div className="flex-row-center h-[450px] p-10">
        <Slider {...settings} className="container">
          {qoutes.map((qoute) => (
            <div key={qoute.id} className="p-4">
              <img
                src={qoute.img}
                alt=""
                className="mx-auto rounded-full "
                width={150}
              />
              <h3 className="text-center my-3 font-semibold">{qoute.name}</h3>
              <h3 className="text-center my-3 font-semibold">
                Rate: {qoute.rate}
              </h3>
              <p className="text-center italic">{qoute.quote}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default QoutesSection;
