
export default class Mountain {
  constructor(name, lat, long, peakElevation = 14000, baseElevation = 0) {
    this.name = name;
    this.lat = lat;
    this.long = long;
    this.peakElevation = peakElevation;
    this.baseElevation = baseElevation;
    this.temperature;
    this.tempFeelsLike;
    this.lastUpdated;
    this.condition;
    this.windSpeed;
    this.windGust;
    this.windDirection;
    this.pressure;
    this.humidity;
    this.visibility;
    this.precipitation;
    this.cloudCover;
    this.uv;

    this.updateData();
  }

  updateData() {
    const url = 'http://api.weatherapi.com/v1/current.json?key=50d8e4c02ac1470d95a181710220403&q='
                + this.lat + ',' + this.long;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.temperature = data.current.temp_f;
        this.tempFeelsLike = data.current.feelslike_f;
        this.lastUpdated = data.current.last_updated;
        this.condition = data.current.condition.text;
        this.windSpeed = data.current.wind_mph;
        this.windGust = data.current.gust_mph;
        this.windDirection = data.current.wind_dir;
        this.pressure = data.current.pressure_in;
        this.humidity = data.current.humidity;
        this.visibility = data.current.vis_miles;
        this.precipitation = data.current.precip_in;
        this.cloudCover = data.current.cloud;
        this.uv = data.current.uv;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}