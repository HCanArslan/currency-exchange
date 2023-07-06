// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from 'worker-loader!../worker/fetchData.worker.js';

export const workerMiddleware = store => {
  const worker = new Worker();

  worker.addEventListener('message', (e) => {
    store.dispatch(e.data);
  });

  return next => action => {
    if (action.type === 'FETCH_RATES_REQUEST') {
      worker.postMessage('FETCH_RATES');
    }
    return next(action);
  };
};

