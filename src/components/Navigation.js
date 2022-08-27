import React from 'react';
import logo from '../Images/netflix logo.png';
import avatar from '../Images/avatar.jpeg';
import { BsBellFill } from 'react-icons/bs';

const Navigation = () => {
  const navItems = [
    {
      id: 1,
      title: 'Home',
    },
    {
      id: 2,
      title: 'TV Shows',
    },
    {
      id: 3,
      title: 'Movies',
    },
    {
      id: 4,
      title: 'My List',
    },
  ];
  return (
    <section className='bg-black/10 text-white'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-[4rem] items-center'>
            <img
              src={logo}
              alt='the netflix logo'
              className='w-[7rem] h-[5rem]'
            />
            <ul className='flex gap-[2rem]'>
              {navItems.map((item) => {
                return <li key={item.id}>{item.title}</li>;
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
