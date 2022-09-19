import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageSlider.css";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ImageSlider() {
  return (
    <div className="slider">
      <div className="pagination"></div>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ el: ".pagination", clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 10000, pauseOnMouseEnter: true }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            className="slider__image"
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/717OO5QwJnL._SX3000_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider__image"
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61jovjd+f9L._SX3000_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider__image"
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61TD5JLGhIL._SX3000_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider__image"
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71qid7QFWJL._SX3000_.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSlider;
