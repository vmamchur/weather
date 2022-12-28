import React from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { WeatherForecast } from '../../types/WeatherForecast';
import { getCurrentDate } from '../../utils/getCurrentDate';
import { Loader } from '../Loader';

interface Props {
  isModalOpen: boolean;
  isLoading: boolean;
  onCloseModal: () => void;
  selectedWeatherForecast: WeatherForecast | null;
  onAddWeatherForecast: () => void;
  onDeleteWeatherForecast: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '60%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
};

export const WeatherForecastModal: React.FC<Props> = ({
  isModalOpen,
  isLoading,
  onCloseModal,
  selectedWeatherForecast,
  onAddWeatherForecast,
  onDeleteWeatherForecast
}) => {
  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb="-40px">
                <Typography id="modal-modal-title" variant="h1" component="h2">
                  {selectedWeatherForecast?.name}
                </Typography>
                <Box
                  component="img"
                  width={200}
                  alt={selectedWeatherForecast?.weather[0].description}
                  src={`https://openweathermap.org/img/wn/${selectedWeatherForecast?.weather[0].icon}@2x.png`}
                />
              </Box>
              <Typography id="modal-modal-description" variant="h5" mb="50px">
                {getCurrentDate()}
              </Typography>
              <Typography variant="h2" mb="10px">
                {selectedWeatherForecast?.main.temp}°C
              </Typography>
              <Box mb="50px">
                <Typography>max. {selectedWeatherForecast?.main.temp_max}°C</Typography>
                <Typography>min. {selectedWeatherForecast?.main.temp_min}°C</Typography>
              </Box>
              <Typography>Wind: {selectedWeatherForecast?.wind.speed} m/s</Typography>
              <Typography>Humidity: {selectedWeatherForecast?.main.humidity}%</Typography>
              <Typography>Pressure: {selectedWeatherForecast?.main.pressure} hpa</Typography>
              <Button fullWidth onClick={onAddWeatherForecast}>
                Add
              </Button>
              <Button fullWidth onClick={onDeleteWeatherForecast}>
                Remove
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};
