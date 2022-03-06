
export const getColumns = () => {
  let columns = [
    { field: 'id', headerName: '14er', width: 150 },
    { field: 'elevation', headerName: 'Elevation', width: 100 },
    { field: 'temp', headerName: 'Temperature (F)', width: 120 }
  ]
  return columns;
}

//use getRowId prop??
export const getRows = () => {
  let rows = [
    { id: 'Pikes Peak', elevation: '14,086', temp: 20 },
    { id: 'Mt. Quandry', elevation: '14,151', temp: 6 },
    { id: 'Columbia', elevation: '14,002', temp: 17 },
    { id: 'Huron', elevation: '14,348', temp: -1 }
  ]
  return rows;
}