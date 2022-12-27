import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { getCurrentDate } from '../../utils/getCurrentDate';
import { WeatherForecast } from '../../types/WeatherForecast';

interface Props {
  weatherForecast: WeatherForecast;
}

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: '360px'
    },
    cardInner: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    media: {
      display: 'block',
      width: '120px',
      height: '100px'
    }
  })
);

export const WeatherForecastCard: React.FC<Props> = ({ weatherForecast }) => {
  const { card, cardInner, media } = useStyles();

  return (
    <Card className={card} variant="outlined">
      <CardContent style={{ paddingBottom: 0 }}>
        <Box className={cardInner}>
          <Typography variant="h4">{weatherForecast?.name}</Typography>
          <Typography>{weatherForecast?.sys.country}</Typography>
        </Box>
        <Typography>{getCurrentDate()}</Typography>
        <Box className={cardInner}>
          <CardMedia
            className={media}
            image={`https://openweathermap.org/img/wn/${weatherForecast?.weather[0].icon}@2x.png`}
          ></CardMedia>
          <Typography variant="h2">{weatherForecast?.main.temp}°C</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
