import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e47c91',
      contrastText:'#ffffff'
    },
    secondary: {
      main: green[500],
    },
  }
});

export default theme;