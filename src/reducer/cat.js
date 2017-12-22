import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
  ADOPT_CAT_REQUEST,
  ADOPT_CAT_ERROR,
  ADOPT_CAT_SUCCESS
} from '../actions';

const initialState = {
  data: {},
  loading: false,
  error: null
};

//----------------------------------------------------------------Cat REDUCER-----------------------------------------------------------------

export default (state = initialState, action) => {
  if (action.type === FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: action.cat,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === ADOPT_CAT_REQUEST) {
    return Object.assign({}, state, {
      error: null,
      loading: true
    });
  } else if (action.type === ADOPT_CAT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === ADOPT_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: null,
      loading: false
    });
  }

  return state;
};
