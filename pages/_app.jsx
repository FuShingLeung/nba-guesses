import '@/styles/globals.css';

import { UserProvider } from '@auth0/nextjs-auth0/client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/lib/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </UserProvider>
    </>
  );
}
