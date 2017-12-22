import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR,
  ADOPT_DOG_REQUEST,
  ADOPT_DOG_ERROR,
  ADOPT_DOG_SUCCESS
} from '../actions';

const initialState = {
  data: {},
  loading: false,
  error: null
};

//----------------------------------------------------------------Dog REDUCER-----------------------------------------------------------------

export default (state = initialState, action) => {
  if (action.type === FETCH_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      data: action.dog,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === ADOPT_DOG_REQUEST) {
    return Object.assign({}, state, {
      error: null,
      loading: true
    });
  } else if (action.type === ADOPT_DOG_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === ADOPT_DOG_SUCCESS) {
    return Object.assign({}, state, {
      data: null,
      loading: false
    });
  }

  return state;
};
