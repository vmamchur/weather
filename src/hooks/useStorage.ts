import { useState, useEffect } from 'react';
import { WeatherForecast } from '../types/WeatherForecast';

export function useStorage(initialValue: WeatherForecast[], key: string) {
  const getValue = () => {
    const storage = localStorage.getItem(key);

    if (storage) {
      return JSON.parse(storage);
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
