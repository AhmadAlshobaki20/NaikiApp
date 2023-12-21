const inital_state = {
  product: {
    id: "1",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
    name: "Wild Berry",
    price: 160,
  },
  size: 42,
  quantity: 2,
};

export const NikeReducer = (state = inital_state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return "Hi";
    case "INCREASE":
      return "INCREASE";
    case "DICREASE":
      return "DICREASE";
    default:
      return "default";
  }
};
