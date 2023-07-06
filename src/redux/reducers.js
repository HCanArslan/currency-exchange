import { FETCH_RATES_SUCCESS, UPDATE_RATES_DATA } from './actions';

const initialState = {
  rates: {},
};

const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RATES_SUCCESS:
      return {
        ...state,
        rates: action.payload,
      };
    case UPDATE_RATES_DATA:
      return {
        ...state,
        rates: action.payload,
      };
    default:
      return state;
  }
};

export default ratesReducer;
