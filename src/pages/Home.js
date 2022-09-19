import React from "react";
import Header from "./Header";
import Product from "./Product";
// import "../Home.css";
import "../ImageSlider.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61TD5JLGhIL._SX3000_.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61jovjd+f9L._SX3000_.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61DUO0NqyyL._SX3000_.jpg"
              alt=""
            />
            <div className="gradient">abc</div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71qid7QFWJL._SX3000_.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <div className="home__row">
          <Product
            id="12331243"
            title="Acer Nitro 5 Gaming Laptop Intel Core i5"
            price={776.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81bc8mA3nKL._AC_SX355_.jpg"
          />

          <Product
            id="12331241"
            title="PlayStation 5 Console"
            price={499.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51051FiD9UL._SX522_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12331242"
            title="Nintendo Switch with Neon Blue and Neon Red Joy-Con"
            price={297.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61-PblYntsL._AC_SX466_.jpg"
          />

          <Product
            id="12331244"
            title="Redragon S101 Wired Gaming Keyboard and Mouse Combo"
            price={35.98}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71kr3WAj1FL._AC_SY450_.jpg"
          />

          <Product
            id="12331245"
            title="RESPAWN 110 Ergonomic Gaming Chair with Footrest Recliner"
            price={135.54}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61oOnqhGXjL._AC_SY355_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12331246"
            title="VIOTEK GNV34DBE2 34-Inch UWQHD 144Hz Multimedia Gaming Monitor, Ultrawide 21:9"
            price={389.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71ZLTTCYRSS._AC_SY450_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
