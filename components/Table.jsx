import React from 'react';
import { DataGrid } from '@/components/mui';

function Table({ rows, columns }) {
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
