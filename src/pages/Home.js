import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Trending from '../components/Trending';
import TopRated from '../components/TopRated';
import Action from '../components/Action';
import Comedy from '../components/Comedy';
import Horror from '../components/Horror';
import Romance from '../components/Romance';
import Documentaries from '../components/Documentaries';
import Shows from '../components/Shows';

const Home = () => {
  return (
    <main>
      {/* <Navigation /> */}
      <Hero />

      <Trending />
      <TopRated />
      <Action />
      <Comedy />
      <Horror />
      <Documentaries />
      <Romance />
    </main>
  );
};

export default Home;
