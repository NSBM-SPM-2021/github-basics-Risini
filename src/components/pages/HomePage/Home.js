import React from 'react';
import HeroSection from '../../HeroSection';
// import Searchform from '../SearchResult/Searchform';
import { homeObjFour, homeObjOne } from './Data';


function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;