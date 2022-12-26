export interface GeneralWeatherInfo {
  coord: WeatherCoord;
  weather: WeatherInfo[];
  base: string;
  main: WeatherMainInfo;
  visibility: number;
  wind: WeatherWindInfo;
  clouds: WeatherCloudsInfo;
  dt: number;
  sys: WeatherSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface WeatherCoord {
  lon: number;
  lat: number;
}

interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface WeatherMainInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface WeatherWindInfo {
  speed: number;
  deg: number;
  gust: number;
}

interface WeatherCloudsInfo {
  all: number;
}

interface WeatherSys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
