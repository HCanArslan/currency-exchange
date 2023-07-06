import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CurrencyDisplay from './components/CurrencyDisplay';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const worker = new Worker('./worker/fetchData.worker.js');

    worker.addEventListener('message', (event) => {
      const { type, payload } = event.data;
      if (type === 'FETCH_RATES_SUCCESS') {
        dispatch({ type: 'UPDATE_RATES', payload });
      }
    });

    worker.postMessage('FETCH_RATES');

    return () => {
      worker.terminate();
    };
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <HeroSection />
        <CurrencyConverter />
        <CurrencyDisplay />
      </div>
    </ThemeProvider>
  );
}

export default App;
