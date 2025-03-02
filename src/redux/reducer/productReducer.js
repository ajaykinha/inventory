import types from "../constant"

const initialState = {
  productList: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PRODUCT_LIST:
      return {
        ...state,
        productList: action.data,
      };

    // case types.UPDATE_PRODUCT:
    //   return {
    //     ...state,
    //     productList: [action.data, ...state.productList],
    //   };

    //   case types.ADD_PRODUCT:
    //   return {
    //     ...state,
    //     productList: [action.data, ...state.productList],
    //   };

    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
