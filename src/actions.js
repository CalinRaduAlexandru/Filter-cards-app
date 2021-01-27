import {
  CHANGE_SEARCH_FIELD,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
  TOGGLE_POPUP,
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestUsers = () => (dispatch) => {
  dispatch({ type: REQUEST_USERS_PENDING });
  fetch("http://localhost:3000/")
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_USERS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_USERS_FAILED, payload: error }));
};

export const togglePopup = () => ({
  type: TOGGLE_POPUP,
});
