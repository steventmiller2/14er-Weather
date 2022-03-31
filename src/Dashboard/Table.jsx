import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TableData from './TableData';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.table = new TableData();
  }

  render() {
    return(
      <DataGrid
        columns={this.table.getColumns()}
        rows={this.table.getRows()}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    )
  }
}

export default Table;