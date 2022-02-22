import { ActionTypes } from "../constants/action-types";

const initalState = {
  products: [
    {
      id: 1,
      title: "Emanuel",
      category: "programmer",
    },
  ],
};

export const productReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
