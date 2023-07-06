import './App.css';
import CurrencyDisplay from './components/CurrencyDisplay';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
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
