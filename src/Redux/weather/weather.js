import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
// const Actions = 'weather/actions';

// initial state
const initialState = {
  weather: [],
  status: 'idle',
  text: 'Weather',
};

// thunk
const fetchWeather = createAsyncThunk('weather/actions', async () => 'weather');

// reducer
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(fetchWeather.fulfilled, (state, action) => ({
        ...state,
        weather: action.payload,
        status: 'successful',
      }))
      .addCase(fetchWeather.rejected, (state, { error }) => ({
        ...state,
        status: error,
      }));
  },
});

export const allWeather = (state) => state.weather.weather;
export const allStatus = (state) => state.weather.status;
export const allMessages = (state) => state.weather.message;

export default weatherSlice.reducer;
