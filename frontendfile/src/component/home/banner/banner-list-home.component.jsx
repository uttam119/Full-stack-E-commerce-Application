// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import { useEffect, useState } from "react";
// import bannerSvc from "../../../pages/cms/banner/banner.service";
// import { toast } from "react-toastify";
// const BannerListHomeComponent = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slideShow: 1,
//     slidesToScroll: 1,
//   };
// const [data,setData]=useState()
// const getList=async()=>{
//   try{
// const response=await bannerSvc.listForHome()
// console.log("response",response.result)
// setData(response.result)
//   }catch(exception){
//     toast.warning("Problem while fetching banner,please reload the page once")
//   }
// }
// console.log("dfdfd",data)

// useEffect(()=>{
// getList()
// },[])

//   return (
//     <>
  
//       <Slider {...settings}>
//         {
//           data && data.map((row,indx)=>(
//             <div key={indx}>
          

//             <img className="img img-fluid"  onError={(e)=>{
//               e.target.src="https://placehold.jp/1400x600.png"
//             }} src={import.meta.env.VITE_IMAGE_URL+"/banner/"+row.image} alt="Banner 231" />

//             </div>
//           ))
//         }
       
//       </Slider>
//     </>
//   );
// };
// export default BannerListHomeComponent;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useEffect, useState } from "react";
import bannerSvc from "../../../pages/cms/banner/banner.service";
import { toast } from "react-toastify";

const BannerListHomeComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }


  const [data, setData] = useState();

  const getList = async () => {
    try {
      const response = await bannerSvc.listForHome();
      console.log("response", response.result);
      setData(response.result);
    } catch (exception) {
      toast.warning("Problem while fetching banner, please reload the page once");
    }
  };

  console.log("dfdfd", data);

  useEffect(() => {
    getList();
  }, []);

  return (
    <>

<style>
        {`
          .slider-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .slider-container img {
            max-width: 100%;
            height: auto;
            margin: 0 auto;
          }
        `}
      </style>
      <Slider {...settings}>
        {data && data.map((row, indx) => (
          <div key={indx} className="slider-container">
            <img
              className="img img-fluid"
              onError={(e) => {
                e.target.src = "https://placehold.jp/1400x600.png";
              }}
              src={`${import.meta.env.VITE_IMAGE_URL}/banner/${row.image}`}
              alt="Banner"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default BannerListHomeComponent;
