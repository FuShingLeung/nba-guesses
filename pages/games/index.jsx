import Head from 'next/head';
import { useState } from 'react';

import dayjs from 'dayjs';

import BasicDatePicker from '@/components/DatePicker';
import GameList from '@/components/GameList';

import Layout from '@/components/Layout';
import Heading from '@/components/Heading';
import { Grid, Typography } from '@mui/material';

import { useUser } from '@auth0/nextjs-auth0/client';
import SubmitButton from '@/components/SubmitButton';

const { BALLDONTLIE_ENDPOINT, BALLDONTLIE_API_KEY } = process.env;

export default function Games({ ssd = [] }) {
  const [listOfGames, setListOfGames] = useState(ssd);

  const [date, setDate] = useState(dayjs(new Date()));

  const { user } = useUser();

  const handleSubmit = (gameId, team) => {
    console.log(`Submitting vote for game ${gameId} - ${team}`);
  };

  const fetchGames = async (date) => {
    setDate(date);

    try {
      const formattedDate = date.format('YYYY-MM-DD');

      const response = await fetch(
        `/api/games/fetchGames?date=${formattedDate}`,
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setListOfGames(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDateChange = (date) => {
    fetchGames(date);
  };

  return (
    <>
      <Head>
        <title>Games - NBA Guesses</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heading>Games</Heading>
        {!user && <Typography>Please log in to guess</Typography>}
        <Grid container justifyContent="center">
          <BasicDatePicker dateChange={handleDateChange} date={date} />
        </Grid>
        <GameList listOfGames={listOfGames} handleSubmit={handleSubmit} />
        <SubmitButton />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const dateToday = dayjs(new Date()).format('YYYY-MM-DD');
  const gamesToday = await fetch(
    `${BALLDONTLIE_ENDPOINT}games?dates[]=${dateToday}`,
    {
      method: 'GET',
      headers: {
        Authorization: BALLDONTLIE_API_KEY,
      },
    },
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const games = gamesToday.data;
  return {
    props: {
      ssd: games,
    },
  };
};
