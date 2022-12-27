import React from 'react';
import headerImage from '../../assets/images/weather-header.jpg';
import { createStyles, makeStyles } from '@mui/styles';
import { SearchBar } from '../SearchBar/SearchBar';

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      height: '40vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundImage: `url(${headerImage})`
    }
  })
);

export const Header = () => {
  const { header } = useStyles();

  return (
    <header className={header}>
      <SearchBar />
    </header>
  );
};
