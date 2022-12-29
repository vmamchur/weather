import React, { useMemo } from 'react';
import { Button, IconButton, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { createStyles, makeStyles } from '@mui/styles';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import { WeatherForecast } from '../../types/WeatherForecast';
import { getCurrentDate } from '../../utils/getCurrentDate';
import { Loader } from '../Loader';

interface Props {
  isModalOpen: boolean;
  isLoading: boolean;
  onCloseModal: () => void;
  selectedWeatherForecast: WeatherForecast | null;
  onAddWeatherForecast: () => void;
  onDeleteWeatherForecast: (weatherForecast: WeatherForecast) => void;
  checkWeatherForecasts: (newWeatherForecast: WeatherForecast) => boolean;
}

const useStyles = makeStyles(() =>
  createStyles({
    exit: {
      position: 'absolute',
      display: 'block',
      top: '5px',
      right: '5px',
      zIndex: '2'
    },
    actionButtons: {
      position: 'absolute',
      display: 'flex',
      gap: '20px',
      bottom: '36px',
      zIndex: '2'
    }
  })
);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '60%',
  bgcolor: '#fff',
  boxShadow: 24,
  p: 4,
  outline: 0
};

export const WeatherForecastModal: React.FC<Props> = ({
  isModalOpen,
  isLoading,
  onCloseModal,
  selectedWeatherForecast,
  onAddWeatherForecast,
  onDeleteWeatherForecast,
  checkWeatherForecasts
}) => {
  const { exit, actionButtons } = useStyles();

  const alreadyExists = useMemo(
    () => (selectedWeatherForecast ? checkWeatherForecasts(selectedWeatherForecast) : false),
    [selectedWeatherForecast]
  );

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className={exit}>
            <IconButton onClick={onCloseModal}>
              <ClearIcon />
            </IconButton>
          </Box>

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
              <Box mb="20px">
                <Typography>max. {selectedWeatherForecast?.main.temp_max}°C</Typography>
                <Typography>min. {selectedWeatherForecast?.main.temp_min}°C</Typography>
              </Box>
              <Typography>Wind: {selectedWeatherForecast?.wind.speed} m/s</Typography>
              <Typography>Humidity: {selectedWeatherForecast?.main.humidity}%</Typography>
              <Typography>Pressure: {selectedWeatherForecast?.main.pressure} hpa</Typography>
              <Box className={actionButtons}>
                <Button
                  size="large"
                  variant="contained"
                  onClick={onAddWeatherForecast}
                  startIcon={<AddIcon />}
                  disabled={alreadyExists}
                >
                  Add
                </Button>

                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    if (selectedWeatherForecast) {
                      onDeleteWeatherForecast(selectedWeatherForecast);
                    }
                  }}
                  startIcon={<DeleteIcon />}
                  color="error"
                  disabled={!alreadyExists}
                >
                  Delete
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};
