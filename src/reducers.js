import {
  CHANGE_SEARCH_FIELD,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
  TOGGLE_POPUP,
} from "./constants";

const INITIAL_STATE_SEARCH = {
  searchFilter: "",
};

export const searchUsers = (state = INITIAL_STATE_SEARCH, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchFilter: action.payload };

    default:
      return state;
  }
};

const INITIAL_STATE_USERS = {
  isPending: false,
  users: [],
  error: "",
};

export const requestUsers = (state = INITIAL_STATE_USERS, action) => {
  switch (action.type) {
    case REQUEST_USERS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_USERS_SUCCESS:
      return { ...state, users: action.payload, isPending: false };
    case REQUEST_USERS_FAILED:
      return { ...state, error: action.payload, isPending: false };

    default:
      return state;
  }
};

const INITIAL_STATE_POPUP = {
  popup: false,
};

export const togglePopup = (state = INITIAL_STATE_POPUP, action) => {
  switch (action.type) {
    case TOGGLE_POPUP:
      return { ...state, popup: !state.popup };
    default:
      return state;
  }
};
