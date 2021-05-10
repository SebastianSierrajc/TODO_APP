import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#83b9ff',
      main: '#448aff',
      dark: '#005ecb',
      contrastText: '#000000',
    },
    secondary: {
      light: '#000000',
      main: '#e0e0e0',
      dark: '#aeaeae',
      contrastText: '#448aff',
    },
    type: 'light',
  },
});

export default theme;
