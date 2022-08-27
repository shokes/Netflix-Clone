import React from 'react';
import { useSelector } from 'react-redux';
import { RiPlayFill } from 'react-icons/ri';
import { RiErrorWarningLine } from 'react-icons/ri';
import Navigation from './Navigation';

const Hero = () => {
  const { cases } = useSelector((store) => store.shows);

  // randomly picks out a movie from an array of 20 movies
  const randomNumber = Math.floor(Math.random() * 20);

  if (cases.length !== 0) {
    console.log(cases);
    const { backdrop_path: bg, name, overview } = cases?.results[randomNumber];

    return (
      <section
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${bg}')`,
          // backgroundImage: `url(${externalImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '700px',

          background: 'linear-gradient(#e66465, #9198e5)', 
        }}
      >
        <Navigation />
        <div className='container'>
          <div className='w-[29rem] text-white pt-[10rem]'>
            <h3 className='text-6xl font-bold mb-2'>{name}</h3>
            <p className='mb-2'>{overview}</p>
            <div className='flex gap-2 '>
              <button className='bg-white text-black px-5 py-1 rounded-[0.2rem] flex items-center gap-1'>
                <RiPlayFill className='w-[1.8rem] h-[1.8rem]' />{' '}
                <span className='font-semibold'>Play</span>
              </button>
              <button className='bg-black/[0.6]   px-4 py-1 rounded-[0.2rem] flex items-center gap-1'>
                <RiErrorWarningLine className='w-[1.8rem] h-[1.8rem] rotate-180 text-white opacity-100' />{' '}
                <span className='opacity-100 font-semibold text-white'>
                  More Info
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Hero;
