import React from 'react';
import { Grid } from '@mui/material';

import { WeatherForecast } from '../../types/WeatherForecast';
import { WeatherForecastCard } from '../WeatherForecastCard';

interface Props {
  weatherForecasts: WeatherForecast[];
  onSelectWeatherForecast: (weatherForecast: WeatherForecast) => void;
  onDeleteWeatherForecast: (weatherForecast: WeatherForecast) => void;
  onUpdateWeatherForecast: (weatherForecast: WeatherForecast) => void;
}

export const WeatherForecastsList: React.FC<Props> = ({
  weatherForecasts,
  onSelectWeatherForecast,
  onDeleteWeatherForecast,
  onUpdateWeatherForecast
}) => (
  <Grid container spacing={3} pb="40px">
    {weatherForecasts.map((weatherForecast) => (
      <Grid item key={weatherForecast.id}>
        <WeatherForecastCard
          weatherForecast={weatherForecast}
          onSelectWeatherForecast={onSelectWeatherForecast}
          onDeleteWeatherForecast={onDeleteWeatherForecast}
          onUpdateWeatherForecast={onUpdateWeatherForecast}
        />
      </Grid>
    ))}
  </Grid>
);
