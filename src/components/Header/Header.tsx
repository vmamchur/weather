import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { SearchBar } from '../SearchBar/SearchBar';
import { Typography } from '@mui/material';

interface Props {
  searchQuery: string;
  onChangeSearchQuery: (value: string) => void;
  onGetWeatherForecast: () => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      height: '40vh',
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
      <SearchBar
        searchQuery={searchQuery}
        onChangeSearchQuery={onChangeSearchQuery}
        onGetWeatherForecast={onGetWeatherForecast}
      />
    </header>
  );
};
