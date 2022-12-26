const WEATHER_PATH = `${process.env.REACT_APP_API_PATH}/weather`;

export const getWeather = async (city: string) => {
  const response = await fetch(
    `${WEATHER_PATH}?q=${city},&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  );

  return response.json();
};
