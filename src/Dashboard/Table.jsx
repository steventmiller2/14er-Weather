import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TableData from './TableData';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: [],
      colData: []
    };

    // this.tableData = new TableData();
  }

  componentDidMount() { //TODO: try a try-catch instead of a promise
    const table = new TableData();
    this.setState({
      colData: table.getColumns()
    })

    const p = new Promise((resolve, reject) => {
      resolve(table.getRows());
    });

    p.then(data => {
      console.log(data);
      this.setState(state => {
        return state.rowData = data;
      }, console.log(this.state))
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <DataGrid
        columns={this.state.colData}
        rows={this.state.rowData}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    )
  }
}

export default Table;