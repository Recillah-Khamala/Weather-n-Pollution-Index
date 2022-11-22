import { configureStore } from '@reduxjs/toolkit';
import weatherReducers from './weather/weather';

const Store = configureStore(
  {
    reducer: {
      weather: weatherReducers,
    },
  },
);

export default Store;
