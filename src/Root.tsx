import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { createTheme } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './Routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
