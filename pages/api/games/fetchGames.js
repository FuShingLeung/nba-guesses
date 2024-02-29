import dayjs from 'dayjs';

const { BALLDONTLIE_ENDPOINT, BALLDONTLIE_API_KEY } = process.env;

const fetchGames = async (req, res) => {
  const { date } = req.query;

  const formattedDate = dayjs(date).format('YYYY-MM-DD');

  try {
    const response = await fetch(
      `${BALLDONTLIE_ENDPOINT}games?dates[]=${formattedDate}`,
      {
        method: 'GET',
        headers: {
          Authorization: BALLDONTLIE_API_KEY,
        },
      },
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    res.status(200).json(data.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchGames;
