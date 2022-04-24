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
  }

  async componentDidMount() {
    try {
      let tableData = new TableData();
      this.setState({
        rowData: await tableData.getRows(),
        colData: tableData.getColumns()
      });
    } catch (err) {
      console.log(err);
    }

    //SAME LOGIC AS ABOVE BUT WITH PROMISE (DO NOT NEED ASYNC)
    // const table = new TableData();
    // this.setState({
    //   colData: table.getColumns()
    // })

    // const p = new Promise((resolve, reject) => {
    //   resolve(table.getRows());
    // });

    // p.then(data => {
    //   console.log(data);
    //   this.setState(state => {
    //     return state.rowData = data;
    //   }, console.log(this.state))
    // })
    // .catch((err) => console.log(err));
  }

  render() { console.log(this.state)
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