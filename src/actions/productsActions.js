export const checkout = () => {
  return {
    type: "CHECK_OUT",
  };
};

export const ShowProduct = (id) => {
  return {
    type: "SHOW_PRODUCT",
    productId: id,
  };
};

export const AddToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    productId: id,
  };
};

// export const increaseQuantity = () => {
//   return {
//     type: "INCREASE",
//   };
// };

// export const decreaseQuantity = () => {
//   return {
//     type: "DECREASE",
//   };
// };
