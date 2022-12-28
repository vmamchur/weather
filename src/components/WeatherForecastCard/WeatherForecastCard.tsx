import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { getCurrentDate } from '../../utils/getCurrentDate';
import { WeatherForecast } from '../../types/WeatherForecast';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';

interface Props {
  weatherForecast: WeatherForecast;
  onSelectWeatherForecast: (weatherForecast: WeatherForecast) => void;
  onDeleteWeatherForecast: (weatherForecast: WeatherForecast) => void;
  onUpdateWeatherForecast: (weatherForecast: WeatherForecast) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      position: 'relative',
      width: '360px',
      '&:hover': {
        transform: 'scale3d(1.1, 1.1, 1)',
        cursor: 'pointer'
      }
    },
    buttons: {
      position: 'absolute',
      display: 'block',
      top: '5px',
      right: '5px',
      zIndex: '2'
    },
    media: {
      display: 'block',
      width: '120px',
      height: '100px'
    }
  })
);

export const WeatherForecastCard: React.FC<Props> = ({
  weatherForecast,
  onSelectWeatherForecast,
  onDeleteWeatherForecast,
  onUpdateWeatherForecast
}) => {
  const [isFocusing, setIsFocusing] = useState(false);

  const { card, buttons, media } = useStyles();

  return (
    <Grid item>
      <Card
        onMouseEnter={() => setIsFocusing(true)}
        onMouseLeave={() => setIsFocusing(false)}
        className={card}
        style={{ transition: 'transform 0.3s ease' }}
        variant="outlined"
      >
        {isFocusing && (
          <Box className={buttons}>
            <IconButton onClick={() => onDeleteWeatherForecast(weatherForecast)}>
              <DeleteIcon />
            </IconButton>

            <IconButton onClick={() => onUpdateWeatherForecast(weatherForecast)}>
              <RefreshIcon />
            </IconButton>
          </Box>
        )}
        <CardContent
          style={{ paddingBottom: 0 }}
          onClick={() => onSelectWeatherForecast(weatherForecast)}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h4">{weatherForecast?.name}</Typography>
            {!isFocusing && <Typography>{weatherForecast?.sys.country}</Typography>}
          </Box>
          <Typography>{getCurrentDate()}</Typography>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <CardMedia
              className={media}
              image={`https://openweathermap.org/img/wn/${weatherForecast?.weather[0].icon}@2x.png`}
            ></CardMedia>
            <Typography variant="h2">{weatherForecast?.main.temp}°C</Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
