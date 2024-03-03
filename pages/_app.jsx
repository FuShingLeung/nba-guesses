import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import '@/styles/globals.css';
import theme from '@/lib/theme';

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
            staleTime: 1000 * 10,
            retry: process.env.NODE_ENV === 'production',
            refetchOnWindowFocus: process.env.NODE_ENV === 'production',
          },
        },
      }),
  );

  console.log(`pageProps: ${pageProps}`);
  console.log(`pageProps.dehydratedState: ${pageProps.dehydratedState}`);

  return (
    <>
      <CssBaseline />
      <UserProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <HydrationBoundary state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </HydrationBoundary>
          </QueryClientProvider>
        </ThemeProvider>
      </UserProvider>
    </>
  );
}
