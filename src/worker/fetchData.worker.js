import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.exchangerate-api.com/v4/latest/USD?access_key=${API_KEY}`;


// eslint-disable-next-line no-restricted-globals
self.addEventListener('message', async (e) => {
  if (!e) return;
  if (e.data.type === 'FETCH_RATES') {
    try {
      const response = await axios.get(API_URL);
      // eslint-disable-next-line no-restricted-globals
      self.postMessage({ type: 'FETCH_RATES_SUCCESS', payload: response.data });
    } catch (error) {
      console.error(error);
    }
  }
});
