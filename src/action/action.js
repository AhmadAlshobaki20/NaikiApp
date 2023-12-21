export const addToCard = () => {
  return {
    type: "ADD_TO_CART",
  };
};

export const increase = (amount) => {
  return {
    type: "INCREASE",
    amount: parseInt(amount),
  };
};

export const dicrease = (amount) => {
  return {
    type: "DICREASE",
    amount: parseInt(amount),
  };
};
