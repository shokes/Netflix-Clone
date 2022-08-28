import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '734e83e292e160a234f82ed2e2c6fb68&';

const covidNigeriaApiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213`;
const initialState = {
  cases: [],
  trending: [],
  isLoading: true,
};

const getTrendingApiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`;

export const getCases = createAsyncThunk('cases/getCases', () => {
  return fetch(covidNigeriaApiUrl)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

export const getTrending = createAsyncThunk('shows/getTrending', () => {
  return fetch(getTrendingApiUrl)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const casesSlice = createSlice({
  name: 'cases',
  initialState,
  extraReducers: {
    [getCases.pending]: (state) => {
      state.isLoading = true;
    },
    [getCases.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cases = action.payload;
      //  console.log(state.cases);
    },

    [getCases.rejected]: (state) => {
      state.isLoading = false;
    },

    // for the trending shows
    [getTrending.pending]: (state) => {
      state.isLoading = true;
    },
    [getTrending.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.trending = action.payload.results;
      // console.log(state.trending.results);
    },

    [getTrending.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default casesSlice.reducer;
