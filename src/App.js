import './App.css';
import SimpleBottomNavigation from './layout/Menu';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/rozgrzewka.theme';
import '@fontsource/roboto';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <SimpleBottomNavigation />
     
    </ThemeProvider>
  );
}

export default App;
