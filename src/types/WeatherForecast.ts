export interface WeatherForecast {
  coord: WeatherForecastCoord;
  weather: WeatherForecastInfo[];
  base: string;
  main: WeatherForecastMainInfo;
  visibility: number;
  wind: WeatherForecastWindInfo;
  clouds: WeatherForecastCloudsInfo;
  dt: number;
  sys: WeatherForecastSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface WeatherForecastCoord {
  lon: number;
  lat: number;
}

interface WeatherForecastInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface WeatherForecastMainInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface WeatherForecastWindInfo {
  speed: number;
  deg: number;
  gust: number;
}

interface WeatherForecastCloudsInfo {
  all: number;
}

interface WeatherForecastSys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
