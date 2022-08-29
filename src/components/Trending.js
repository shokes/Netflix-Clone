import React from 'react';
import { useSelector } from 'react-redux';

const Trending = () => {
  const { trending } = useSelector((store) => store.shows);
  //  backgroundImage: `url('https://image.tmdb.org/t/p/original/${bg}')`,
  //           backgroundSize: 'cover',
  //           backgroundRepeat: 'no-repeat',
  //           backgroundPosition: 'center',
  if (trending.length !== 0) {
    return (
      <section className='bg-black'>
        <div className='container'>
          <h3 className='font-bold text-2xl text-white mb-3'>Trending Now</h3>
          <div className='flex'>
            {trending.map((item) => {
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
      </section>
    );
  }
};

export default Trending;
