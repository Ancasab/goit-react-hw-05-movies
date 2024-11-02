import MovieListItem from "components/MovieListItem/MovieListItem";
import PropTypes from "prop-types";

// export default function MovieList({})

import React from 'react'

const MoviesList = ({movies}) => {
  return (
    <>
        <ul>
            {movies.map(({ id, title }) => (
                <MovieListItem key={id} title={title} id={id} />
            ))}
        </ul>
    </>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList