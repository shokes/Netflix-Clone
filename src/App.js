import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getCases } from './features/show/showSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCases());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section>
      <Home />
    </section>
  );
}

export default App;
