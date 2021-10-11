import {
  ADD_PRODUCTS,
  EDIT_PRODUCTS,
  DELETE_PRODUCTS,
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  GET_USERS,
  USERS_ERROR,
  LOGIN_USERS,
} from "../reducers/types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
    console.log(res);
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
};

export const addProduct = (data) => async (dispatch) => {
  try {
    await axios.post(`https://fakestoreapi.com/products`, data).then((res) => {
      dispatch({
        type: ADD_PRODUCTS,
        payload: res.data,
      });
      console.log(res);
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
};

// export const editProduct = (id, data) => async (dispatch) => {
export const editProduct = (product) => async (dispatch) => {
  try {
    await axios
      // .put(`https://fakestoreapi.com/products/${id}`, data)
      .put(`https://fakestoreapi.com/products/${product.id}`, product)
      .then((res) => {
        dispatch({
          type: EDIT_PRODUCTS,
          payload: res.data,
        });
        console.log(res);
      });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        dispatch({
          type: DELETE_PRODUCTS,
          payload: res.data,
        });
        console.log(res);
      });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
};

// bagian admin user
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/users`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
    console.log(res);
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
};
// export const loginUsers = (data) => async (dispatch) => {
export const loginUsers = (username, password) => async (dispatch) => {
  try {
    await axios
      // .post(`https://fakestoreapi.com/auth/login`, data)
      .post(`https://fakestoreapi.com/auth/login`, {
        username: String,
        password: String,
      })
      .then((res) => {
        dispatch({
          type: LOGIN_USERS,
          payload: res.data,
        });
        console.log(res);
      });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
};
