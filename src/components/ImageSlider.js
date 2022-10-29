import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCreative } from "swiper";
import "../styles/ImageSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

function ImageSlider() {
  return (
    <div className="slider">
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Autoplay, Navigation, EffectCreative]}
      >
        <SwiperSlide>
          <img
            className="slider__image"
            src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="slider__image"
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="slider__image"
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="slider__image"
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="slider__image"
            src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSlider;
