import axios from 'axios';

export const fetchCurrencyRates = async () => {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD?access_keyd3b93c73b711dcf06ee34275fee331cc');
    return response.data;
  } catch (error) {
    console.error('Error while fetching currency rates', error);
    throw error;
  }
};
