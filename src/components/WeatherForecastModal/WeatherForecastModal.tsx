import React, { useState } from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';

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

export const WeatherForecastModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" alignItems="center" justifyContent="space-between" mb="-40px">
            <Typography id="modal-modal-title" variant="h1" component="h2">
              Kyiv
            </Typography>
            <Box
              component="img"
              width={200}
              alt="Weather"
              src="https://openweathermap.org/img/wn/10n@2x.png"
            />
          </Box>
          <Typography id="modal-modal-description" variant="h5" mb="50px">
            27 December 2022
          </Typography>
          <Typography variant="h2" mb="10px">
            4°C
          </Typography>
          <Typography>max. 30°C</Typography>
          <Typography mb="100px">min. -20°C</Typography>
          <Typography>Wind: 3.89 m/s</Typography>
          <Typography>Humidity: 98 %</Typography>
          <Typography>Pressure: 1012 hpa</Typography>
        </Box>
      </Modal>
    </div>
  );
};
