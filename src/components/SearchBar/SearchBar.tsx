import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { createStyles, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    searchBarWrapper: {
      width: '60%',
      marginBottom: '100px'
    },
    searchBar: {
      backgroundColor: 'white',
      borderRadius: '4px'
    }
  })
);

export const SearchBar = () => {
  const { searchBarWrapper, searchBar } = useStyles();

  return (
    <Box className={searchBarWrapper}>
      <FormControl className={searchBar} fullWidth variant="outlined">
        <OutlinedInput
          placeholder="Search city"
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};
