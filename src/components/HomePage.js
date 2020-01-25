import React, { useEffect } from "react";
import {useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import {fetchMoviesList} from "../actions";
import {Loader} from "./MoviePage"; 
import {MovieCard} from "./movieCard";
import {CardDeck} from "react-bootstrap";
 


const HomePage = props => {
  document.title = "Popular Movies - Your all-in-one movies home!";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesList())},[])
  const movies = useSelector((state) => state.home.movies);
  const loading = useSelector(state => state.home.isLoadingMovies);

  const m = (movies) => {
    return movies.map((movie, e) => {
      return <MovieCard key={e} movie={movie} />
    })
  }
  return (
    <div>
      <CardDeck>
              {!loading?m(movies):<Loader/>}
      </CardDeck>
       {console.log(movies)}

    </div>
    
  );
}
export default HomePage;