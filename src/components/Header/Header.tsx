import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

import { SearchBar } from '../SearchBar/SearchBar';
import logo from '../../assets/images/logo.png';

interface Props {
  searchQuery: string;
  onChangeSearchQuery: (value: string) => void;
  onGetWeatherForecast: () => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      height: '50vh',
      marginBottom: '60px',
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      alignItems: 'center'
    }
  })
);

export const Header: React.FC<Props> = ({
  searchQuery,
  onChangeSearchQuery,
  onGetWeatherForecast
}) => {
  const { header } = useStyles();

  return (
    <header className={header}>
      <Box
        sx={{ transform: 'translateY(40px)' }}
        component="img"
        alt="Cloud with sunshine."
        src={logo}
      />

      <SearchBar
        searchQuery={searchQuery}
        onChangeSearchQuery={onChangeSearchQuery}
        onGetWeatherForecast={onGetWeatherForecast}
      />
    </header>
  );
};
