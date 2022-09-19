import React from "react";
import { useStateValue } from "../StateProvider";
import Header from "./Header";
import "../Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div>
      <Header />
      <div className="checkout" id="checkout__column">
        <div className="checkout__left">
          {cart?.length === 0 ? (
            <div>
              <h2>Your Amazon Cart is empty</h2>
              <p>
                You have no items in your cart. To buy one or more items, click
                "Add to cart" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <div className="checkout__titleWrapper">
                <h2 className="checkout__title">Shopping Cart</h2>
                <p className="checkout__price">Price</p>
              </div>
              {/* List out all of the Checkout Products */}
              {cart?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
