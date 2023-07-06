import axios from 'axios';

export const FETCH_RATES_SUCCESS = 'FETCH_RATES_SUCCESS';
export const FETCH_RATES_FAILURE = 'FETCH_RATES_FAILURE';
export const UPDATE_RATES_DATA = 'UPDATE_RATES_DATA';

export const fetchRatesSuccess = (rates) => {
  return {
    type: FETCH_RATES_SUCCESS,
    payload: rates.rates 
  };
};

export const fetchRatesFailure = (error) => {
  return {
    type: FETCH_RATES_FAILURE,
    payload: error
  };
};

export const fetchRates = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD?access_key=d3b93c73b711dcf06ee34275fee331cc');
      const rates = response.data;

      dispatch(fetchRatesSuccess(rates));
    } catch (error) {
      dispatch(fetchRatesFailure(error.message));
    }
  };
};

export const updateRatesData = (ratesData) => {
    return {
      type: UPDATE_RATES_DATA,
      payload: ratesData,
    };
  };