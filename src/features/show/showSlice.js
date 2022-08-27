import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const covidNigeriaApiUrl =
  'https://api.themoviedb.org/3/discover/tv?api_key=734e83e292e160a234f82ed2e2c6fb68&with_networks=213';
const initialState = {
  cases: [],
  isLoading: true,
};

export const getCases = createAsyncThunk('cases/getCases', () => {
  return fetch(covidNigeriaApiUrl)
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
      console.log(state.cases);
    },

    [getCases.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default casesSlice.reducer;
