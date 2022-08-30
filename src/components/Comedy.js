import React from 'react';
import { useSelector } from 'react-redux/es/exports';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

const Comedy = () => {
  const { comedy } = useSelector((store) => store.shows);

  if (comedy.length !== 0) {
    return (
      <section className='bg-black'>
        <div className='ml-[2rem]'>
          <h3 className='font-bold text-2xl text-white mb-3'>Comedy</h3>
          <Swiper
            slidesPerView={5}
            spaceBetween={4}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper'
          >
            <div className='flex'>
              {comedy.map((item) => {
                const { poster_path: poster } = item;

                return (
                  <SwiperSlide key={poster}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${poster}`}
                      alt='comedy'
                      className='w-full h-[9rem] rounded-[0.2rem]'
                    />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </section>
    );
  }
};

export default Comedy;
