import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';
import List from './pages/List';
import { useEffect } from 'react';
import {
  getTrending,
  getTopRated,
  getHeroMovie,
  getAction,
  getComedy,
  getHorror,
  getDocumentaries,
  getRomance,
} from './features/show/showSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHeroMovie());
    dispatch(getTrending());
    dispatch(getTopRated());
    dispatch(getAction());
    dispatch(getComedy());
    dispatch(getHorror());
    dispatch(getDocumentaries());
    dispatch(getRomance());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/tvshows' element={<TvShows />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
