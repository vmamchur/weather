import React from 'react';
import headerImage from '../../assets/images/weather-header.jpg';
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
      backgroundImage: `url(${headerImage})`
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
