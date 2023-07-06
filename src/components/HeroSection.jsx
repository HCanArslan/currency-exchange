import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import CurrencyCard from './CurrencyCard';
import { FaDollarSign, FaEuroSign, FaPoundSign, FaLiraSign } from 'react-icons/fa';

const CURRENCY_DATA = [
  { icon: <FaDollarSign />, currency: 'USD' },
  { icon: <FaEuroSign />, currency: 'EUR' },
  { icon: <FaPoundSign />, currency: 'GBP' },
  { icon: <FaLiraSign />, currency: 'TRY' },
];

const BackgroundBox = styled(Box)(({ theme }) => ({
  height: '85vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  zIndex: '-5000',
  '&::before': {
    content: '""',
    position: 'absolute',
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${process.env.PUBLIC_URL + '/hero-image.png'}) no-repeat center center/cover`,
    backgroundSize: 'cover',
    height: '200%',
    width: '100%',
    top: '-50%',
    left: '0',
    zIndex: '-1',
  },
}));

const HeroSection = () => {
  const rates = useSelector(state => state.rates);

  const currencies = useMemo(() => CURRENCY_DATA.map(currency => ({
    ...currency,
    rate: rates[currency.currency]
  })), [rates]);

  return (
    <BackgroundBox>
      {currencies.map((currencyData, index) => (
        <CurrencyCard
          key={currencyData.currency}
          currencyData={currencyData}
          index={index}
        />
      ))}
    </BackgroundBox>
  );
};

export default HeroSection;
