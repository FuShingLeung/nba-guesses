import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/lib/theme';

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
            staleTime: 60 * 1000,
            retry: process.env.NODE_ENV === 'production',
            refetchOnWindowFocus: process.env.NODE_ENV === 'production',
          },
        },
      }),
  );
  return (
    <>
      <CssBaseline />
      <UserProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Component {...pageProps} />
          </QueryClientProvider>
        </ThemeProvider>
      </UserProvider>
    </>
  );
}
