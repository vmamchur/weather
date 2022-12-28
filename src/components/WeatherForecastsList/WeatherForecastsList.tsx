import React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { WeatherForecast } from '../../types/WeatherForecast';
import { WeatherForecastCard } from '../WeatherForecastCard';

interface Props {
  onSelectWeatherForecast: (weatherForecast: WeatherForecast) => void;
  weatherForecasts: WeatherForecast[];
}

export const WeatherForecastsList: React.FC<Props> = ({
  onSelectWeatherForecast,
  weatherForecasts
}) => (
  <Container>
    <Grid sx={{ mb: '60px' }} container spacing={4}>
      {weatherForecasts.map((weatherForecast) => (
        <Grid item key={weatherForecast.id}>
          <WeatherForecastCard
            onSelectWeatherForecast={onSelectWeatherForecast}
            weatherForecast={weatherForecast}
          />
        </Grid>
      ))}
    </Grid>
  </Container>
);
