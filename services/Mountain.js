import "regenerator-runtime";

export default class Mountain {
  constructor(name, lat, long, peakElevation = 14000, baseElevation = 0) {
    this.name = name;
    this.lat = lat;
    this.long = long;
    this.peakElevation = peakElevation;
    this.baseElevation = baseElevation;
    this.weather;
    // this.fetchData();
  }

  async updateWeather() {
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
    this.setWeather(weather);
    return weather;
  }

  async fetchData() {
    const url = 'http://api.weatherapi.com/v1/current.json?key=50d8e4c02ac1470d95a181710220403&q='
                + this.lat + ',' + this.long + '/';
    try {
      const response = await fetch(url);
      const data = response.json();
      return data;
    } catch (err) {
      console.log('Error:', err)
    }
  }

  //   updateWeather() {
  //   const data = this.fetchData();
  //   let weather = {
  //     'temperature': data.current.temp_f,
  //     'tempFeelsLike': data.current.feelslike_f,
  //     'lastUpdated': data.current.last_updated,
  //     'condition': data.current.condition.text,
  //     'windSpeed': data.current.wind_mph,
  //     'windGust': data.current.gust_mph,
  //     'windDirection': data.current.wind_dir,
  //     'pressure': data.current.pressure_in,
  //     'humidity': data.current.humidity,
  //     'visibility': data.current.vis_miles,
  //     'precipitation': data.current.precip_in,
  //     'cloudCover': data.current.cloud,
  //     'uv': data.current.uv
  //   }
  //   this.setWeather(weather);
  //   return weather;
  // }

  // fetchData() {
  //   const url = 'http://api.weatherapi.com/v1/current.json?key=50d8e4c02ac1470d95a181710220403&q='
  //               + this.lat + ',' + this.long + '/';
  //   const promise = new Promise( (resolve, reject) => {
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(jsonData => resolve(jsonData))
  //       .catch(err => reject(err))
  //   });
  //   promise.then(data => this.setWeather(data));
  // }

  setWeather(aData) {
    this.weather = aData;
  }

  getWeather() {
    // if(this.weather.lastUpdated == undefined || this.weather.lastUpdated)
    // if(!this.weather) {
    //   return await this.updateWeather();
    // } else {
      return this.weather;
    // }
  }

  getData() {
    return [this.name, this.peakElevation];
  }

  getMountainData() {
    return this;
  }
}


    // return fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     let weather = {
    //       'temperature': data.current.temp_f,
    //       'tempFeelsLike': data.current.feelslike_f,
    //       'lastUpdated': data.current.last_updated,
    //       'condition': data.current.condition.text,
    //       'windSpeed': data.current.wind_mph,
    //       'windGust': data.current.gust_mph,
    //       'windDirection': data.current.wind_dir,
    //       'pressure': data.current.pressure_in,
    //       'humidity': data.current.humidity,
    //       'visibility': data.current.vis_miles,
    //       'precipitation': data.current.precip_in,
    //       'cloudCover': data.current.cloud,
    //       'uv': data.current.uv
    //     }
    //     console.log(weather);
    //     return weather;
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });