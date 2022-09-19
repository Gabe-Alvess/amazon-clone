export const initialState = {
  cart: [
    {
      id: "12331243",
      title:
        "Acer Nitro 5 Gaming Laptop Intel Core i5-10300H NVIDIA GeForce RTX 3050",
      price: 776.99,
      rating: 5,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81bc8mA3nKL._AC_SX355_.jpg",
    },

    {
      id: "12331243",
      title:
        "Acer Nitro 5 Gaming Laptop Intel Core i5-10300H NVIDIA GeForce RTX 3050",
      price: 776.99,
      rating: 5,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81bc8mA3nKL._AC_SX355_.jpg",
    },
  ],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      //Logic for adding item to cart
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      // Logic for removing item from cart

      //we cloned the cart
      let newCart = [...state.cart];

      // we foun the index of the item we're looking for
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        // item exists in cart, remove it...
        newCart.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id}) as its not in cart`
        );
      }
      return { ...state, cart: newCart };
    default:
      return state;
  }
};

export default reducer;
