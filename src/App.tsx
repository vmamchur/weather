import React, { useState, useCallback } from 'react';
import { loadWeatherForecast as getWeatherForecast } from './api/weatherForecast';
import { Header } from './components/Header';
import { WeatherForecastsList } from './components/WeatherForecastsList';
import { useStorage } from './hooks/useStorage';
import { WeatherForecast } from './types/WeatherForecast';

export default function App() {
  const [weatherForecasts, setWeatherForecasts] = useStorage([], 'weatherForecasts');
  const [selectedWeatherForecast, setSelectedWeatherForecast] = useState<WeatherForecast | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeSearchQuery = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const handleGetWeatherForecast = useCallback(async () => {
    const newWeatherForecast = await getWeatherForecast(searchQuery.trim());
    const isUnsuccessfulRequest =
      newWeatherForecast.cod === '404' || newWeatherForecast.cod === '400';
    const alreadyExists = weatherForecasts.some(
      (weatherForecast: WeatherForecast) => weatherForecast.id === newWeatherForecast.id
    );

    setSearchQuery('');

    if (isUnsuccessfulRequest) {
      return;
    }

    if (alreadyExists) {
      return;
    }

    setSelectedWeatherForecast(newWeatherForecast);
    setWeatherForecasts([...weatherForecasts, newWeatherForecast]);
  }, [searchQuery]);

  console.log(selectedWeatherForecast);

  return (
    <>
      <Header
        searchQuery={searchQuery}
        onChangeSearchQuery={handleChangeSearchQuery}
        onGetWeatherForecast={handleGetWeatherForecast}
      />
      <WeatherForecastsList weatherForecasts={weatherForecasts} />
    </>
  );
}
