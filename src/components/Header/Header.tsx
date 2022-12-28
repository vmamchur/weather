import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { SearchBar } from '../SearchBar/SearchBar';

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
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'rgb(34, 44, 255)',
      background: 'linear-gradient(180deg, rgba(84, 40, 175, 1) 0%, rgba(255, 255, 255, 255) 100%)'
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
