import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { getWeather } from '../../api/weather';
import { GeneralWeatherInfo } from '../../types/GeneralWeatherInfo';
import { getCurrentDate } from '../../utils/getCurrentDate';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      maxWidth: '360px'
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

export const WeatherCard = () => {
  const [weatherInfo, setWeatherInfo] = React.useState<GeneralWeatherInfo | null>(null);

  const getWeatherInfoFromApi = async () => {
    try {
      const weatherInfoFromApi = await getWeather('Teofipol');

      setWeatherInfo(weatherInfoFromApi);
    } catch (error) {}
  };

  React.useEffect(() => {
    getWeatherInfoFromApi();
  }, []);

  const { card, cardInner, media } = useStyles();

  return (
    <Card className={card} variant="outlined">
      <CardContent style={{ paddingBottom: 0 }}>
        <Box className={cardInner}>
          <Typography variant="h4">{weatherInfo?.name}</Typography>
          <Typography>{weatherInfo?.sys.country}</Typography>
        </Box>
        <Typography>{getCurrentDate()}</Typography>
        <Box className={cardInner}>
          <CardMedia
            className={media}
            image={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@2x.png`}
          ></CardMedia>
          <Typography variant="h2">{weatherInfo?.main.temp}°C</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
