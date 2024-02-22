import Head from 'next/head';
import { Inter } from 'next/font/google';

import Layout from '@/components/Layout';
import Heading from '@/components/Heading';

export default function SingleGame() {
  return (
    <>
      <Head>
        <title>Games - NBA Guesses</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heading component="h2" variant="h4">
          Games
        </Heading>
      </Layout>
    </>
  );
}
