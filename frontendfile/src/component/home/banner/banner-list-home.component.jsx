import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import banner1 from "../../../assets/images/banner/banner-1.jpg";
import banner2 from "../../../assets/images/banner/banner-2.jpg";
import banner3 from "../../../assets/images/banner/banner-3.jpg";
const BannerListHomeComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img className="img img-fluid" src={banner1} alt="Banner 1" />
        </div>
        <div>
          <img className="img img-fluid" src={banner2} alt="banner2" />
        </div>
        <div>
          <img className="img img-fluid" src={banner3} alt="banner3" />
        </div>
        <div>
          <img className="img img-fluid" src={banner2} alt="banner21" />
        </div>
        <div>
          <img className="img img-fluid" src={banner1} alt="banner231" />
        </div>
      </Slider>
    </>
  );
};
export default BannerListHomeComponent;
