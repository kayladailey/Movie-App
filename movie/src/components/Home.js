import React from 'react';

//import Components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

const Home = () => (
    //if you do not wish to wrap all of your components in a div you may use <React.fragment> or the short hand for it below <>,</>
   
   <>
   <HeroImage/>
   <SearchBar/>
   <Grid/>
   <MovieThumb/>
   <Spinner/>
   <LoadMoreBtn/>
   </>

)

export default Home;