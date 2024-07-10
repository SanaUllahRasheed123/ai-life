import { IoLogoLinkedin } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaSlack } from "react-icons/fa6";
import { SiWalmart } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../../index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={100}
        slidesPerView={3}
        centeredSlides={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          <SwiperSlide className="">
            <span className=" size-64 bg-[#0e1123]">
              {/* <img src={linked} alt="" /> */}
              <IoLogoLinkedin className="w-full h-full text-blue-600" />
            </span>
          </SwiperSlide>

          <SwiperSlide className="">
            <span className=" size-64 bg-[#0e1123] ">
              {/* <img src={linked} alt="" /> */}
              <FcGoogle className="w-full h-full  text-blue-600 " />
            </span>
          </SwiperSlide>

          <SwiperSlide>
            <span className=" size-64 bg-[#0e1123]">
              {/* <img src={linked} alt="" /> */}
              <FaSlack className="w-full h-full text-[#36C961]" />
            </span>
          </SwiperSlide>

          <SwiperSlide>
            <span className=" size-64 bg-[#0e1123]">
              {/* <img src={linked} alt="" /> */}
              <SiWalmart className="w-full h-full text-[#0047AB]" />
            </span>
          </SwiperSlide>

          <SwiperSlide>
            <span className=" size-64 bg-[#0e1123]">
              {/* <img src={linked} alt="" /> */}
              <SiAmazonaws className="w-full h-full text-[#FFC107]" />
            </span>
          </SwiperSlide>

          <SwiperSlide>
            <span className=" size-64 bg-[#0e1123] ">
              {/* <img src={linked} alt="" /> */}
              <IoLogoLinkedin className="w-full h-full text-blue-600" />
            </span>
          </SwiperSlide>

          <SwiperSlide>
            <span className=" size-64 bg-[#0e1123]">
              {/* <img src={linked} alt="" /> */}
              <FcGoogle className="w-full h-full" />
            </span>
          </SwiperSlide>

          <SwiperSlide>
            <span className=" size-64 bg-[#0e1123]">
              {/* <img src={linked} alt="" /> */}
              <FaSlack className="w-full h-full text-[#36C961]" />
            </span>
          </SwiperSlide>

          <SwiperSlide>
            <span className=" size-64 bg-[#0e1123]">
              {/* <img src={linked} alt="" /> */}
              <SiAmazonaws className="w-full h-full text-[#FFC107]" />
            </span>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
