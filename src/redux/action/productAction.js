import types from "../constant";

const addProduct = (data) => {
  return {
    type: types.ADD_PRODUCT,
    data,
  };
};

const updateProduct = (data) => {
  return {
    type: types.UPDATE_PRODUCT,
    data,
  };
};

const deleteProduct = (data) => {
  return {
    type: types.DELETE_PRODUCT,
    data,
  };
};

const updateProductList = (data) => {
  return {
    type: types.UPDATE_PRODUCT_LIST,
    data,
  };
};

export {
  addProduct,
  updateProduct,
  deleteProduct,
  updateProductList,
};
