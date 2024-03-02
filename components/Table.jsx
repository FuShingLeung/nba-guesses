import React from 'react';
import { DataGrid, Typography } from '@/components/mui';
import { useUsers } from '@/lib/tq/users/queries';

function Table({ columns }) {
  const { data: users } = useUsers();
  if (!users.length) return <Typography>No users to rank</Typography>;

  const rows = users.map((item, index) => {
    const { nickname, totalGuesses, correctGuesses } = item;
    const accuracy = (correctGuesses / totalGuesses) * 100;
    const points = correctGuesses - (totalGuesses - correctGuesses) / 2;
    return {
      id: index + 1,
      nickname: nickname,
      totalGuesses: totalGuesses,
      correctGuesses: correctGuesses,
      accuracy: isNaN(accuracy) ? null : `${accuracy.toFixed(1)}%`,
      points: points,
    };
  });

  const sortedRows = [...rows].sort((a, b) => b.points - a.points);

  sortedRows.forEach((row, index) => {
    row.id = index + 1;
  });

  return (
    <DataGrid
      rows={sortedRows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  );
}

export default Table;
