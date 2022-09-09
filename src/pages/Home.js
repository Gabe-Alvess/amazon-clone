import React from "react";
import Header from "./Header";
import Product from "./Product";
import "../Home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12331243"
            title="Acer Nitro 5 Gaming Laptop Intel Core i5-10300H NVIDIA GeForce RTX 3050"
            price={710}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81bc8mA3nKL._AC_SX355_.jpg"
          />

          <Product
            id="12331241"
            title="PlayStation 5 Console whit two joystics color white"
            price={562}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51051FiD9UL._SX522_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12331242"
            title="Nintendo Switch with Neon Blue and Neon Red Joy-Con"
            price={304}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61-PblYntsL._AC_SX466_.jpg"
          />

          <Product
            id="12331244"
            title="Redragon S101 Wired Gaming Keyboard and Mouse Combo"
            price={36.77}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71kr3WAj1FL._AC_SY450_.jpg"
          />

          <Product
            id="12331245"
            title="RESPAWN 110 Ergonomic Gaming Chair with Footrest Recliner"
            price={200}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61oOnqhGXjL._AC_SY355_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12331246"
            title="VIOTEK GNV34DBE2 34-Inch UWQHD 144Hz Multimedia Gaming Monitor, Ultrawide 21:9"
            price={398}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71ZLTTCYRSS._AC_SY450_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
