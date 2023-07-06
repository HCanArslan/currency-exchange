import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCurrencyRates } from '../api';
import { FETCH_RATES_REQUEST, fetchRatesSuccess } from './actions';



function* fetchRatesSaga() {
  try {
    const rates = yield call(fetchCurrencyRates);
    yield put(fetchRatesSuccess(rates));
  } catch (error) {
    console.error(error);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_RATES_REQUEST, fetchRatesSaga);
}
