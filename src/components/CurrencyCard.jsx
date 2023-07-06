import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/system';

const currencyStyles = [
  { background: 'rgba(17, 78, 173, 0.6)' },
  { background: 'rgba(73, 93, 122, 0.6)' },
  { background: 'rgba(45, 210, 224, 0.6)' },
  { background: 'rgba(228, 137, 103, 0.6)' },
];

const CurrencyCard = styled(Box)(({ theme, width }) => ({
  width: width,
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  color: theme.palette.common.white,
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(10px)',
  boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',
  transition: '0.5s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const CurrencyCardComponent = React.memo(({ currencyData, index }) => {
  const [selectedCurrency, setSelectedCurrency] = React.useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleCurrencyClick = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <CurrencyCard
      width={isSmallScreen ? '100%' : '200px'}
      sx={{
        ...currencyStyles[index % currencyStyles.length],
        boxShadow: selectedCurrency === currencyData.currency ? '0px 0px 15px rgba(255, 255, 255, 0.5)' : '5px 5px 15px rgba(0, 0, 0, 0.2)',
        transform: selectedCurrency === currencyData.currency ? 'translateY(-10px)' : 'none',
      }}
      onClick={() => handleCurrencyClick(currencyData.currency)}
    >
      {currencyData.icon}
      <Typography variant="h6">{currencyData.currency}</Typography>
      <Typography variant="h5">{currencyData.rate}</Typography>
    </CurrencyCard>
  );
});

export default CurrencyCardComponent;
