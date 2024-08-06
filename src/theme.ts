import { ThemeOptions } from '@mui/material';

export const theme: ThemeOptions = {
  spacing: 5,
  typography: {
    fontFamily: [
      'Red Hat Text',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    mode: 'dark',
  },
};
