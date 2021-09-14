import React from 'react';
import HeroSection from '../../HeroSection';
import Searchform from '../SearchResult/Searchform';
import { homeObjOne } from './Data';


function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Searchform/>
    </>
  );
}

export default Home;