import { REACT_APP_API_BASE_URL } from '../config';

//------------------------------------------------------Dog------------------------------------------------------

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
const fetchDogSuccess = dog => ({
  type: FETCH_DOG_SUCCESS,
  dog
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
const fetchDogError = error => ({
  type: FETCH_DOG_ERROR,
  error
});

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  fetch(`${REACT_APP_API_BASE_URL}/dog`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(dog => dispatch(fetchDogSuccess(dog)))
    .catch(error => dispatch(fetchDogError(error)));
};

export const adoptDog = () => dispatch => {
  console.log('adopt dog');
  dispatch(adoptDogRequest());

  fetch(`${REACT_APP_API_BASE_URL}/dog`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) {
        console.log('error adopting dog');
        return Promise.reject(res.statusText);
      }
      return res.statusText;
    })
    .then(dog => {
      console.log('dispatching adoptDogSuccess');
      dispatch(adoptDogSuccess());
    })
    .then(() => dispatch(fetchDog()))
    .then(error => adoptDogError(error));
};

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST
});

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = () => ({
  type: ADOPT_DOG_ERROR
});

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = () => ({
  type: ADOPT_DOG_SUCCESS
});

//-------------------------------------------------------CAT-------------------------------------------------------

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
const fetchCatError = error => ({
  type: FETCH_CAT_ERROR,
  error
});

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  fetch(`${REACT_APP_API_BASE_URL}/cat`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(cat => dispatch(fetchCatSuccess(cat)))
    .catch(error => dispatch(fetchCatError(error)));
};

export const adoptCat = () => dispatch => {
  console.log('adopt cat');
  dispatch(adoptCatRequest());

  fetch(`${REACT_APP_API_BASE_URL}/cat`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) {
        console.log('error adopting cat');
        return Promise.reject(res.statusText);
      }
      return res.statusText;
    })
    .then(cat => {
      console.log('dispatching adoptCatSuccess');
      dispatch(adoptCatSuccess());
    })
    .then(() => dispatch(fetchCat()))
    .catch(error => adoptCatError(error));
};

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = () => ({
  type: ADOPT_CAT_ERROR
});

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS
});
