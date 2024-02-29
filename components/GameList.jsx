import React from 'react';

import { Card, CardContent, List, ListItem } from '@/components/mui';

import Heading from '@/components/Heading';

function GameList({ listOfGames }) {
  console.log(listOfGames);
  return (
    <List component={'ol'} sx={{ listStyle: 'none' }}>
      {listOfGames.length > 0 ? (
        listOfGames.map(({ id, date, home_team, visitor_team }) => (
          <ListItem key={id}>
            <Card component="article" sx={{ width: '100%' }}>
              <Heading component="h2" variant="h3">
                {home_team.full_name} vs {visitor_team.full_name}
              </Heading>
              <CardContent>{date}</CardContent>
            </Card>
          </ListItem>
        ))
      ) : (
        <ListItem>
          <Card component="article" sx={{ width: '100%' }}>
            <CardContent>No games found</CardContent>
          </Card>
        </ListItem>
      )}
    </List>
  );
}

export default GameList;
