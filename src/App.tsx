import { Box, Container } from '@mui/system';
import React, { useState, useCallback, useEffect } from 'react';
import { loadWeatherForecast as getWeatherForecast } from './api/weatherForecast';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  const checkWeatherForecasts = (newWeatherForecast: WeatherForecast) => {
    return weatherForecasts.some(
      (weatherForecast: WeatherForecast) => weatherForecast.id === newWeatherForecast.id
    );
  };

  const handleChangeSearchQuery = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const handleGetWeatherForecast = async () => {
    const newWeatherForecast = await getWeatherForecast(searchQuery.trim());
    const isUnsuccessfulRequest =
      newWeatherForecast.cod === '404' || newWeatherForecast.cod === '400';

    setSearchQuery('');

    if (isUnsuccessfulRequest) {
      return;
    }

    setIsLoading(true);
    setIsModalOpen(true);

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

  const handleDeleteWeatherForecast = (weatherForecast: WeatherForecast) => {
    const alreadyExists = checkWeatherForecasts(weatherForecast);

    if (!alreadyExists) {
      return;
    }

    const filteredWeatherForecasts = weatherForecasts.filter(
      (forecast: WeatherForecast) => forecast.id !== weatherForecast.id
    );

    setWeatherForecasts(filteredWeatherForecasts);
    setIsModalOpen(false);
  };

  const handleUpdateWeatherForecast = async (weatherForecast: WeatherForecast) => {
    const copyWeatherForecasts = JSON.parse(JSON.stringify(weatherForecasts));
    const foundWeatherForecastIndex = weatherForecasts.findIndex(
      (forecast: WeatherForecast) => forecast.id === weatherForecast.id
    );

    const updatedWeatherForecast = await getWeatherForecast(weatherForecast.name);

    copyWeatherForecasts.splice(foundWeatherForecastIndex, 1, updatedWeatherForecast);
    setWeatherForecasts(copyWeatherForecasts);
  };

  const initialLoadWeatherForecasts = async () => {
    const copyWeatherForecasts = JSON.parse(JSON.stringify(weatherForecasts));

    await Promise.all(
      weatherForecasts.map(async (weatherForecast: WeatherForecast) => {
        const foundWeatherForecastIndex = weatherForecasts.findIndex(
          (forecast: WeatherForecast) => forecast.id === weatherForecast.id
        );

        const updatedWeatherForecast = await getWeatherForecast(weatherForecast.name);

        copyWeatherForecasts.splice(foundWeatherForecastIndex, 1, updatedWeatherForecast);
      })
    );

    setWeatherForecasts(copyWeatherForecasts);
  };

  useEffect(() => {
    initialLoadWeatherForecasts();
  }, []);

  return (
    <Layout>
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
        checkWeatherForecasts={checkWeatherForecasts}
      />
      <WeatherForecastsList
        weatherForecasts={weatherForecasts}
        onSelectWeatherForecast={handleSelectWeatherForecast}
        onDeleteWeatherForecast={handleDeleteWeatherForecast}
        onUpdateWeatherForecast={handleUpdateWeatherForecast}
      />
    </Layout>
  );
}
