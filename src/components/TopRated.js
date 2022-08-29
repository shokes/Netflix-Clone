import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const TopRated = () => {
  const { topRated } = useSelector((store) => store.shows);
  if (topRated.length !== 0) {
    return (
      <section className='bg-black'>
        <div className='container'>
          <h3 className='font-bold text-2xl text-white mb-3'>Top Rated</h3>
          <div className='flex'>
            {topRated.map((item) => {
              const { poster_path: poster } = item;

              return (
                <div key={poster}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${poster}`}
                    alt='fff'
                    className='w-[8rem] h-[4rem]'
                  />
                </div>
              );
            })}
          </div>
        </div>
        ;
      </section>
    );
  }
};

export default TopRated;
