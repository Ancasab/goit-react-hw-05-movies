import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import api from 'services/api';


const HomePage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        api.getTrendingMovies().then(data => {
            data.results.map(({ id, title }) =>
                setMovies(m => [...m, { id, title }])
            );
        });
    }, []);

  return (
      <main>
          <h1>Trending Today</h1>
          {movies.length !== 0 && <MoviesList movies={movies}/>}
    </main>
  )
}

export default HomePage