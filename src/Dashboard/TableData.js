import Mountain from "../../services/Mountain";
import * as latlongs from '../../resources/latlongs.json';

const mountains = {
  "Blanca Peak": {
    "lat": 37.577473,
    "long": -105.485443,
    "elevationPeak": 14100,
    "elevationBase": 10500
  },
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

// const mockMountainMap = new Map(

// );

export default class TableData {
  constructor() {
    this.peaks = new Map();

  }

  getMountains() {
    for( let mountain in mountains ) {
      let props = mountains[mountain];
      this.peaks.set(mountain, new Mountain(mountain, props.lat, props.long, props.elevationPeak, props.elevationBase));
    }
  }

  getColumns() {
    // let table = new TableData(); //temporary to test API
    // console.log(table.getMap()); //^same
    let columns = [
      { field: 'id', headerName: '14er', width: 150 },
      { field: 'elevation', headerName: 'Elevation', width: 100 },
      { field: 'temp', headerName: 'Temperature (F)', width: 120 },
      { field: 'tempFeelsLike', headerName: 'Feels Like Temp (F)', width: 150 }
    ]
    return columns;
  }

  //use getRowId prop??
  getRows() {
    this.getMountains();
    let rows = [];
    this.peaks.forEach( peak => {
      console.log(peak.weather)
      // let temperature = weather.temperature;
      // let tempFeelsLike = weather.tempFeelsLike;
      rows.push({ id: peak.name, elevation: peak.peakElevation, temp: peak.name,
        tempFeelsLike: peak.name })
        console.log(rows);
    });

    // this.peaks.forEach( async peak => {
    //   let weather = await peak.updateWeather();
    //   let data = JSON.stringify(weather);
    //   // let temperature = weather.temperature;
    //   // let tempFeelsLike = weather.tempFeelsLike;
    //   rows.push({ id: peak.name, elevation: peak.peakElevation, temp: data,
    //     tempFeelsLike: data })
    //     console.log(rows);
    // });
    
    // for(let [key, value] of this.peaks.entries()) {
    //   let weather = await value.updateWeather();
    //   console.log(weather);
    //   // let temperature = weather.temperature;
    //   // let tempFeelsLike = weather.tempFeelsLike;
    //   rows.push({ id: key, elevation: value.peakElevation, temp: weather.temperature,
    //     tempFeelsLike: weather.tempFeelsLike })
    //     console.log(rows);
    // }
    console.log(rows);
    return rows;    
  }

  getMap() {
    return this.peaks;
  }
}