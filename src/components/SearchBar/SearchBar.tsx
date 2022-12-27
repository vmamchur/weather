import React from 'react';
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { createStyles, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

interface Props {
  searchQuery: string;
  onChangeSearchQuery: (value: string) => void;
  onGetWeatherForecast: () => void;
}

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

export const SearchBar: React.FC<Props> = ({
  searchQuery,
  onChangeSearchQuery,
  onGetWeatherForecast
}) => {
  const { searchBarWrapper, searchBar } = useStyles();

  return (
    <Box className={searchBarWrapper}>
      <FormControl className={searchBar} fullWidth variant="outlined">
        <OutlinedInput
          placeholder="Search city"
          value={searchQuery}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onGetWeatherForecast();
            }
          }}
          onChange={(event) => onChangeSearchQuery(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={onGetWeatherForecast}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};
