import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '734e83e292e160a234f82ed2e2c6fb68&';

// APIs
const originals = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213`;
const getTrendingApiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`;
const topRatedAPI = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`;
const actionAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`;
const comedyAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`;
const horrorAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`;
const romanceAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`;
const documentariesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`;

const initialState = {
  heroMovie: [],
  trending: [],
  topRated: [],
  action: [],
  comedy: [],
  horror: [],
  romance: [],
  documentaries: [],
  isLoading: true,
};

// getting the movie/shows to be displayed on the hero which the original API
export const getHeroMovie = createAsyncThunk('movie/getHeroMovie', () => {
  return fetch(originals)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

// getting trending movies/shows
export const getTrending = createAsyncThunk('shows/getTrending', () => {
  return fetch(getTrendingApiUrl)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

// getting top rated movies/shows
export const getTopRated = createAsyncThunk('shows/getTopRated', () => {
  return fetch(topRatedAPI)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

// getting action movies/shows
export const getAction = createAsyncThunk('shows/getAction', () => {
  return fetch(actionAPI)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

// getting comedy movies/shows
export const getComedy = createAsyncThunk('shows/getComedy', () => {
  return fetch(comedyAPI)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

// getting horror movies/shows
export const getHorror = createAsyncThunk('shows/getHorror', () => {
  return fetch(horrorAPI)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

// getting romance movies/shows
export const getRomance = createAsyncThunk('shows/getRomance', () => {
  return fetch(romanceAPI)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

// getting documentaries movies/shows
export const getDocumentaries = createAsyncThunk(
  'shows/getDocumentaries',
  () => {
    return fetch(documentariesAPI)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
);

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  extraReducers: {
    // for the main movie/show on hero
    [getHeroMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [getHeroMovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.heroMovie = action.payload;
    },

    [getHeroMovie.rejected]: (state) => {
      state.isLoading = false;
    },

    // for the trending shows
    [getTrending.pending]: (state) => {
      state.isLoading = true;
    },
    [getTrending.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.trending = action.payload.results;
    },

    [getTrending.rejected]: (state) => {
      state.isLoading = false;
    },

    // for top rated shows
    [getTopRated.pending]: (state) => {
      state.isLoading = true;
    },
    [getTopRated.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.topRated = action.payload.results;
    },

    [getTopRated.rejected]: (state) => {
      state.isLoading = false;
    },

    // for action movies/shows
    [getAction.pending]: (state) => {
      state.isLoading = true;
    },
    [getAction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.action = action.payload.results;
    },

    [getAction.rejected]: (state) => {
      state.isLoading = false;
    },

    // for comedy movies/shows
    [getComedy.pending]: (state) => {
      state.isLoading = true;
    },
    [getComedy.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comedy = action.payload.results;
    },

    [getComedy.rejected]: (state) => {
      state.isLoading = false;
    },

    // for horror movies/shows
    [getHorror.pending]: (state) => {
      state.isLoading = true;
    },
    [getHorror.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.horror = action.payload.results;
    },

    [getHorror.rejected]: (state) => {
      state.isLoading = false;
    },

    // for romance movies/shows
    [getRomance.pending]: (state) => {
      state.isLoading = true;
    },
    [getRomance.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.romance = action.payload.results;
    },

    [getRomance.rejected]: (state) => {
      state.isLoading = false;
    },

    // for documentaries movies/shows
    [getDocumentaries.pending]: (state) => {
      state.isLoading = true;
    },
    [getDocumentaries.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.documentaries = action.payload.results;
    },

    [getDocumentaries.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default showsSlice.reducer;

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// // import required modules
// import { Pagination, Navigation } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         slidesPerGroup={3}
//         loop={true}
//         loopFillGroupWithBlank={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
