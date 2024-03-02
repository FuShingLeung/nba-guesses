import Head from 'next/head';

import Layout from '@/components/Layout';
import Heading from '@/components/Heading';

import Table from '@/components/Table';

export default function Leaderboard() {
  const columns = [
    { field: 'id', headerName: 'Ranking', width: 100 },
    { field: 'nickname', headerName: 'Name', width: 200 },
    { field: 'totalGuesses', headerName: 'Total guesses', width: 200 },
    { field: 'correctGuesses', headerName: 'Correct guesses', width: 200 },
    { field: 'accuracy', headerName: 'Success rate', width: 200 },
  ];

  const rows = [
    {
      id: 1,
      nickname: 'Bob',
      totalGuesses: 52,
      correctGuesses: 45,
      accuracy: (45 / 52) * 100,
    },
    {
      id: 2,
      nickname: 2,
      totalGuesses: 'Lannister',
      correctGuesses: 'Cersei',
      accuracy: 42,
    },
    {
      id: 3,
      nickname: 3,
      totalGuesses: 'Lannister',
      correctGuesses: 'Jaime',
      accuracy: 45,
    },
    {
      id: 4,
      nickname: 4,
      totalGuesses: 'Stark',
      correctGuesses: 'Arya',
      accuracy: 16,
    },
    {
      id: 5,
      nickname: 5,
      totalGuesses: 'Targaryen',
      correctGuesses: 'Daenerys',
      accuracy: null,
    },
    {
      id: 6,
      nickname: 6,
      totalGuesses: 'Melisandre',
      correctGuesses: null,
      accuracy: 150,
    },
    {
      id: 7,
      nickname: 7,
      totalGuesses: 'Clifford',
      correctGuesses: 'Ferrara',
      accuracy: 44,
    },
    {
      id: 8,
      nickname: 8,
      totalGuesses: 'Frances',
      correctGuesses: 'Rossini',
      accuracy: 36,
    },
    {
      id: 9,
      nickname: 9,
      totalGuesses: 'Roxie',
      correctGuesses: 'Harvey',
      accuracy: 65,
    },
  ];

  rows.forEach((row) => {
    const { totalGuesses, correctGuesses } = row;
    const accuracy = (correctGuesses / totalGuesses) * 100;
    row.accuracy = isNaN(accuracy) ? null : `${accuracy.toFixed(1)}%`;
  });

  return (
    <>
      <Head>
        <title>NBA Guesses</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heading>Leaderboard</Heading>
      </Layout>
      <Table rows={rows} columns={columns} />
    </>
  );
}
