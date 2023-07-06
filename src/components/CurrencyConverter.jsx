import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

const CurrencyConverter = () => {
  const rates = useSelector(state => state.rates);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleAmountChange = useCallback((event) => {
    setAmount(event.target.value);
  }, []);
  
  const handleFromCurrencyChange = useCallback((event) => {
    setFromCurrency(event.target.value);
    setConvertedAmount(0);
  }, []);

  const handleToCurrencyChange = useCallback((event) => {
    setToCurrency(event.target.value);
    setConvertedAmount(0); 
  }, []);

  const handleConvert = useCallback(() => {
    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];
    const convertedValue = (amount / fromRate) * toRate;
    setConvertedAmount(convertedValue.toFixed(2));
  }, [amount, rates, fromCurrency, toCurrency]);

  const currencyOptions = Object.keys(rates);
  const toCurrencySymbol = currencyOptions.includes(toCurrency) ? toCurrency : '';

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth={500}
      mx="auto"
      mb="5rem"
      mt="-5rem"
      p={2}
      bgcolor="rgba(207, 32, 42)"
      boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
      backdropFilter="blur(10px)"
      WebkitBackdropFilter="blur(20px)"
      borderRadius={10}
      border="1px solid rgba(255, 255, 255, 0.18)"
      zIndex={9999}
      color="white"
      top={0}
    >
      <Typography variant="h5" align="center" mb={2}>
        Currency Converter
      </Typography>
      <Box display="flex" flexDirection="row" width="100%" justifyContent="space-between" mb={2}>
        <TextField
          type="number"
          label="Amount"
          value={amount}
          onChange={handleAmountChange}
          fullWidth
        />
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>From</InputLabel>
          <Select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {currencyOptions.map(currency => (
              <MenuItem key={currency} value={currency}>{currency}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>To</InputLabel>
          <Select value={toCurrency} onChange={handleToCurrencyChange}>
            {currencyOptions.map(currency => (
              <MenuItem key={currency} value={currency}>{currency}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" color="primary" onClick={handleConvert} fullWidth>
        Convert
      </Button>
      {convertedAmount !== 0 && (
        <Typography variant="h6" align="center" mt={2}>
          {convertedAmount} {toCurrencySymbol}
        </Typography>
      )}
    </Box>
  );
};

export default CurrencyConverter;