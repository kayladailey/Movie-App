import React, {useState, useEffect} from 'react';
//import our API information below
import axios from 'axios';
import {API_URL, API_KEY, API_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../config';

//import Components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

const Home = () => {
    //if you do not wish to wrap all of your components in a div you may use <React.fragment> or the short hand for it below <>,</>
   const [state, setState] = useState({movies: [] });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
    axios
    .get('https://api.themoviedb.org/3/movie/550?api_key=0bef34ccf7246d01276bd824d4d67323')
    .then(response => console.log(response) )
    .then(response => setState(response))     
    .catch(error => console.error(error))
}, [])
   return (
   <>
   <HeroImage/>
   <SearchBar/>
   <Grid/>
   <MovieThumb/>
   <Spinner/>
   <LoadMoreBtn/>
   </>
   )
}

export default Home;