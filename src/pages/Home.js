import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Trending from '../components/Trending';
import TopRated from '../components/TopRated';

const Home = () => {
  return (
    <main>
      {/* <Navigation /> */}
      <Hero />
      <Trending />
      <TopRated />
    </main>
  );
};

export default Home;
