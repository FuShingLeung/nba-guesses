import React, { useState } from 'react';
import {
  Grid,
  ListItem,
  Card,
  CardContent,
  Radio,
  Typography,
} from '@/components/mui';
import dayjs from 'dayjs';
import Heading from '@/components/Heading';
import TeamLogo from './TeamLogo';

function GameListItem({
  id,
  home_team_score,
  visitor_team_score,
  home_team,
  visitor_team,
  status,
  onSubmit,
}) {
  const gameStatus =
    status !== 'Final'
      ? dayjs(status).format('dddd, DD MMMM HH:mm')
      : `${home_team_score} - ${visitor_team_score}`;

  const [selectedTeam, setSelectedTeam] = useState('');

  const handleGuess = (team) => {
    setSelectedTeam(team.target.value);
    onSubmit(id, team);
  };

  return (
    <ListItem key={id}>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Card component="article" sx={{ width: '100%' }}>
            <Heading component="h2" variant="h3">
              <Grid container justifyContent="space-around" alignItems="center">
                <Grid item>
                  <TeamLogo abbreviation={home_team.abbreviation} />
                </Grid>
                <Grid item>VS</Grid>
                <Grid item>
                  <TeamLogo abbreviation={visitor_team.abbreviation} />
                </Grid>
              </Grid>
            </Heading>
            <CardContent>
              <Grid container alignItems="center" spacing={2} wrap="nowrap">
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      textAlign: 'center',
                      fontSize: 24,
                    }}
                  >
                    {home_team.full_name}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Radio
                    checked={selectedTeam === 'home'}
                    onChange={handleGuess}
                    value="home"
                    name={`radio-${id}`}
                    inputProps={{ 'aria-label': 'Home' }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      textAlign: 'center',
                      fontSize: 12,
                    }}
                  >
                    {gameStatus}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Radio
                    checked={selectedTeam === 'visitor'}
                    onChange={handleGuess}
                    value="visitor"
                    name={`radio-${id}`}
                    inputProps={{ 'aria-label': 'Visitor' }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      textAlign: 'center',
                      fontSize: 24,
                    }}
                  >
                    {visitor_team.full_name}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default GameListItem;
