import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR
} from '../actions';
import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR
} from '../actions';

const initialState = {
  dog: {},
  cat: {},
  loading: false,
  error: null
};

//----------------------------------------------------------------PETS REDUCER-----------------------------------------------------------------

export function petsReducer(state = initialState, action) {
  if (action.type === FETCH_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      dog: action.dog,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      cat: action.cat,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
}

