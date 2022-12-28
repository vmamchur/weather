import React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
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
  <Container>
    <Grid sx={{ mb: '60px' }} container spacing={4}>
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
  </Container>
);
