import Mountain from "../../services/Mountain";

const mountains = {
  // "Blanca Peak": {
  //   "lat": 37.577473,
  //   "long": -105.485443,
  //   "elevationPeak": 14100,
  //   "elevationBase": 10500
  // },
  // "Capitol Peak": {
  //   "lat": 39.150166,
  //   "long": -107.083221,
  //   "elevationPeak": 14200,
  //   "elevationBase": 11500
  // },
  "Pikes Peak": {
    "lat": 38.840542,
    "long": -105.044357,
    "elevationPeak": 14085,
    "elevationBase": 7400
  }
}

export default class TableData {
  constructor() {
    this.peaks = new Map();
    this.getMountains();
  }

  getMountains() {
    for( let mountain in mountains ) {
      let props = mountains[mountain];
      this.peaks.set(mountain, new Mountain(mountain, props.lat, props.long, props.elevationPeak, props.elevationBase));
    }
  }

  getMap() {
    return this.peaks;
  }
}
export const getColumns = () => {
  let table = new TableData(); //temporary to test API
  console.log(table.getMap()); //^same
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