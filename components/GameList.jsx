import React from 'react';
import { List, ListItem, Card, CardContent } from '@/components/mui';
import GameListItem from './GameListItem';

function GameList({ listOfGames, handleSubmit }) {
  const renderGameListItems = () => {
    if (listOfGames.length === 0) {
      return (
        <ListItem>
          <Card component="article" sx={{ width: '100%' }}>
            <CardContent>No games found</CardContent>
          </Card>
        </ListItem>
      );
    }

    return listOfGames.map((game) => (
      <GameListItem key={game.id} {...game} onSubmit={handleSubmit} />
    ));
  };

  return (
    <List component="ol" sx={{ listStyle: 'none' }}>
      {renderGameListItems()}
    </List>
  );
}

export default GameList;
