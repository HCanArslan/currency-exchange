import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#114EAD', // Mavi renk
    },
    secondary: {
      main: '#495D7A', // Alternatif mavi renk
    },
    accent: {
      main: '#2DD2E0', // Turkuaz renk
    },
    warning: {
      main: '#E48967', // Mercan rengi
    },
    error: {
      main: '#AD2511', // Kırmızı renk
    },
    common: {
      white: '#ffffff', // Beyaz renk
    },
  },
});

export default theme;
