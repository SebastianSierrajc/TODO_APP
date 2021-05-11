import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#83b9ff',
      main: '#448aff',
      dark: '#005ecb',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#e0e0e0',
      dark: '#aeaeae',
      contrastText: '#448aff',
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.15)',
      hoverOpacity: 0.06,
    },
    type: 'light',
  },
});

export default theme;