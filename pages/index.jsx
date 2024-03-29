import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0/client';

import Layout from '@/components/Layout';
import Heading from '@/components/Heading';
import { useState } from 'react';

import { useAdd } from '@/lib/tq/users/mutations';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [shouldMutate, setShouldMutate] = useState(true);
  const { user } = useUser();
  const router = useRouter();
  const addMutation = useAdd();

  if (user && shouldMutate) {
    addMutation.mutate(user);
    router.push('/');
    setShouldMutate(false);
  }

  return (
    <>
      <Head>
        <title>NBA Guesses</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heading>Home page</Heading>
      </Layout>
    </>
  );
};

export default Home;
