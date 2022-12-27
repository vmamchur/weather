import React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { WeatherForecast } from '../../types/WeatherForecast';
import { WeatherForecastCard } from '../WeatherForecastCard';

interface Props {
  weatherForecasts: WeatherForecast[];
}

export const WeatherForecastsList: React.FC<Props> = ({ weatherForecasts }) => (
  <Container>
    <Grid sx={{ mb: '60px' }} container spacing={4}>
      {weatherForecasts.map((weatherForecast) => (
        <Grid item>
          <WeatherForecastCard key={weatherForecast.id} weatherForecast={weatherForecast} />
        </Grid>
      ))}
    </Grid>
  </Container>
);
