import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRates, FETCH_RATES_SUCCESS, UPDATE_RATES_DATA } from '../redux/actions';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Paper } from '@mui/material';

const columns = [
  { field: 'currency', headerName: 'Currency', width: 200 },
  { field: 'rate', headerName: 'Rate', type: 'number', width: 150 },
];

const CurrencyDisplay = () => {
  const rates = useSelector(state => state.rates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRates())
      .then(response => {
        if (response && response.type === FETCH_RATES_SUCCESS) {
          const ratesData = response.payload;
          dispatch({ type: UPDATE_RATES_DATA, payload: ratesData });
        }
      });
  }, [dispatch]);

  const rows = useMemo(() => 
    Object.entries(rates).map(([currency, rate], id) => {
      return { id, currency, rate };
    }), 
  [rates]);

  return (
    <Box sx={{ height: 400, width: '76%', margin: '0 auto'}}>
      <Paper elevation={3}>
        <DataGrid rows={rows} columns={columns} pageSize={25} autoPageSize={false}/>
      </Paper>
    </Box>
  );
};

export default CurrencyDisplay;
