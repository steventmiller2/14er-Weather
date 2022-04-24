import Mountain from "../../services/Mountain";
// import * as latlongs from '../../resources/latlongs.json';

const mountains = {
  "Blanca Peak": {
    "lat": 37.577473,
    "long": -105.485443,
    "elevationPeak": 14100,
    "elevationBase": 10500
  },
  "Capitol Peak": {
    "lat": 39.150166,
    "long": -107.083221,
    "elevationPeak": 14200,
    "elevationBase": 11500
  },
  "Pikes Peak": {
    "lat": 38.840542,
    "long": -105.044357,
    "elevationPeak": 14085,
    "elevationBase": 7400
  }
}

export default class TableData {

  constructor() {
    this.peaks = {}
  }

  getMountains() {
    for( let mountain in mountains ) {
      let props = mountains[mountain];
      this.peaks[mountain] = new Mountain(mountain, props.lat, props.long, props.elevationPeak, props.elevationBase);
    }
  }

  getColumns() {
    let columns = [
      { field: 'id', headerName: '14er', width: 150 },
      { field: 'elevation', headerName: 'Elevation', width: 100 },
      { field: 'temp', headerName: 'Temperature (F)', width: 120 },
      { field: 'tempFeelsLike', headerName: 'Feels Like Temp (F)', width: 150 }
    ]
    return columns;
  }

  //use getRowId prop??
  async getRows() {
    this.getMountains();
    try {
      const p = await Promise.all(Object.keys(this.peaks).map( async (key, ind) => {
        const peak = this.peaks[key];
        let weather = await peak.getWeather()
        if (weather !== undefined){
          return { id: peak.name, elevation: peak.peakElevation, temp: weather.temperature,
            tempFeelsLike: weather.tempFeelsLike };
        } else {
          return undefined;
        }
      }));
      return p; 
    } catch (err) {
      console.log(err)
    }
  }
}
