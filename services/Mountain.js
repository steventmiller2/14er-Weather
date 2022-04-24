import axios from "axios";
import "regenerator-runtime";

export default class Mountain {

  constructor(name, lat, long, peakElevation = 14000, baseElevation = 0) {
    this.name = name;
    this.lat = lat;
    this.long = long;
    this.peakElevation = peakElevation;
    this.baseElevation = baseElevation;
    this.weather = undefined;
  }

  async getWeather() { //TODO: add this conditional logic to only fetch if >15min
    if (this.weather === undefined || ("lastUpdated" in this.weather && this.weather['lastUpdated'] > "")) {
      try {
        const data = await this.fetchData();
        let weather = {
          'temperature': data.current.temp_f,
          'tempFeelsLike': data.current.feelslike_f,
          'lastUpdated': data.current.last_updated,
          'condition': data.current.condition.text,
          'windSpeed': data.current.wind_mph,
          'windGust': data.current.gust_mph,
          'windDirection': data.current.wind_dir,
          'pressure': data.current.pressure_in,
          'humidity': data.current.humidity,
          'visibility': data.current.vis_miles,
          'precipitation': data.current.precip_in,
          'cloudCover': data.current.cloud,
          'uv': data.current.uv
        }
        this.weather = weather;
        return weather;
      } catch (err) {
        console.log(err)
        return undefined
      }
    } else {
      return this.weather;
    }
    
  }

  async fetchData() {
    const url = 'http://api.weatherapi.com/v1/current.json?key=50d8e4c02ac1470d95a181710220403&q='
                + this.lat + ',' + this.long + '/';
    const response = await axios.get(url);
    const data = response.data;
    return data;
  }
}