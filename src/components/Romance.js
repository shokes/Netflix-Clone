import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

const Romance = () => {
  const { romance } = useSelector((store) => store.shows);
  if (romance.length !== 0) {
    return (
      <section className='bg-black '>
        <div className='ml-[2rem]'>
          <h3 className='font-bold text-2xl text-white mb-2'>Romance</h3>
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
              {romance.map((item) => {
                const { poster_path: poster } = item;

                return (
                  <SwiperSlide key={poster}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${poster}`}
                      alt='romance'
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

export default Romance;
