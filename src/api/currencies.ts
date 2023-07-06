import axios from 'axios';

export const fetchCurrencyRates = async () => {
  try {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD?access_key=${process.env.REACT_APP_API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching currency rates', error);
    throw error;
  }
};
