import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {getColumns, getRows} from './TableData';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <DataGrid
        columns={getColumns()}
        rows={getRows()}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    )
  }
}

export default Table;