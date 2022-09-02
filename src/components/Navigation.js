import React from 'react';
import logo from '../Images/netflix logo.png';
import avatar from '../Images/avatar.jpeg';
import { BsBellFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navItems = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'TV Shows',
      url: '/tvshows',
    },
    {
      id: 3,
      title: 'Movies',
      url: '/movies',
    },
    {
      id: 4,
      title: 'My List',
      url: '/list',
    },
  ];
  return (
    <section className='bg-black/10 text-white'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-[4rem] items-center'>
            <Link to='/'>
              <img
                src={logo}
                alt='the netflix logo'
                className='w-[7rem] h-[5rem]'
              />
            </Link>

            <ul className='flex gap-[2rem]'>
              {navItems.map((item) => {
                return (
                  <Link key={item.id} to={item.url}>
                    {item.title}
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className='flex items-center gap-[2rem]'>
            <BsBellFill className='w-[1.5rem] h-[1.5rem]' />

            <img
              src={avatar}
              alt='avatar'
              className='w-[2.5rem] h-[2.5rem] rounded-sm'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
