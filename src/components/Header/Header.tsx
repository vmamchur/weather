import React from 'react';
import headerImage from '../../assets/images/weather-header.jpg';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      height: '40vh',
      backgroundImage: `url(${headerImage})`
    }
  })
);

export const Header = () => {
  const classes = useStyles();

  return <header className={classes.header}></header>;
};
