import React from "react";
import "../Product.css";
import star from "../images/star.png";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    //Add item to cart...
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p className="product__title">{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <img src={star} alt="" />
            ))}
        </div>
        <p className="product__price">
          <p className="currency">$</p>
          <strong>{price}</strong>
        </p>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
