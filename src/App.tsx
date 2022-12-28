import React, { useState, useCallback } from 'react';
import { loadWeatherForecast as getWeatherForecast } from './api/weatherForecast';
import { Header } from './components/Header';
import { WeatherForecastModal } from './components/WeatherForecastModal';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  const checkWeatherForecasts = (newWeatherForecast: WeatherForecast) => {
    return weatherForecasts.some(
      (weatherForecast: WeatherForecast) => weatherForecast.id === newWeatherForecast.id
    );
  };

  const handleGetWeatherForecast = async () => {
    setIsLoading(true);
    setIsModalOpen(true);

    const newWeatherForecast = await getWeatherForecast(searchQuery.trim());
    const isUnsuccessfulRequest =
      newWeatherForecast.cod === '404' || newWeatherForecast.cod === '400';

    setSearchQuery('');

    if (isUnsuccessfulRequest) {
      return;
    }

    setSelectedWeatherForecast(newWeatherForecast);
    setIsLoading(false);
  };

  const handleSelectWeatherForecast = (weatherForecast: WeatherForecast) => {
    setSelectedWeatherForecast(weatherForecast);
    setIsModalOpen(true);
  };

  const handleAddWeatherForecast = () => {
    if (selectedWeatherForecast) {
      const alreadyExists = checkWeatherForecasts(selectedWeatherForecast);

      if (alreadyExists) {
        return;
      }

      setWeatherForecasts([...weatherForecasts, selectedWeatherForecast]);
      setIsModalOpen(false);
    }
  };

  const handleDeleteWeatherForecast = () => {
    if (selectedWeatherForecast) {
      const alreadyExists = checkWeatherForecasts(selectedWeatherForecast);

      if (!alreadyExists) {
        return;
      }

      const filteredWeatherForecasts = weatherForecasts.filter(
        (weatherForecast: WeatherForecast) => weatherForecast.id !== selectedWeatherForecast.id
      );

      setWeatherForecasts(filteredWeatherForecasts);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Header
        searchQuery={searchQuery}
        onChangeSearchQuery={handleChangeSearchQuery}
        onGetWeatherForecast={handleGetWeatherForecast}
      />
      <WeatherForecastModal
        isModalOpen={isModalOpen}
        isLoading={isLoading}
        onCloseModal={handleCloseModal}
        selectedWeatherForecast={selectedWeatherForecast}
        onAddWeatherForecast={handleAddWeatherForecast}
        onDeleteWeatherForecast={handleDeleteWeatherForecast}
      />
      <WeatherForecastsList
        onSelectWeatherForecast={handleSelectWeatherForecast}
        weatherForecasts={weatherForecasts}
      />
    </>
  );
}
