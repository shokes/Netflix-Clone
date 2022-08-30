import Home from './pages/Home';
import { useDispatch } from 'react-redux';

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
    <section>
      <Home />
    </section>
  );
}

export default App;
