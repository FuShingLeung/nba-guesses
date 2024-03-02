import React from 'react';
import { DataGrid, Typography } from '@/components/mui';
import { useUsers } from '@/lib/tq/users/queries';

function Table({ columns }) {
  const { data: users } = useUsers();
  if (!users.length) return <Typography>No users to rank</Typography>;

  const rows = users.map((item, index) => {
    const { nickname, totalGuesses, correctGuesses } = item;
    const accuracy = (correctGuesses / totalGuesses) * 100;
    return {
      id: index + 1,
      nickname: nickname,
      totalGuesses: totalGuesses,
      correctGuesses: correctGuesses,
      accuracy: isNaN(accuracy) ? null : `${accuracy.toFixed(1)}%`,
    };
  });

  return (
    <DataGrid
      rows={rows}
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
