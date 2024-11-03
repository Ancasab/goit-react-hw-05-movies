import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from 'components/MovieListItem/MovieListItem';

const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <MovieListItem key={`${movie.id}-${index}`} title={movie.title} id={movie.id} />
          ))
        ) : (
          <li>No movies found.</li>
        )}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;




// import MovieListItem from "components/MovieListItem/MovieListItem";
// import PropTypes from "prop-types";
// import React from 'react'

// const MoviesList = ({movies}) => {
//   return (
//     <>
//         <ul>
//             {movies.map(({ id, title }) => (
//                 <MovieListItem key={id} title={title} id={id} />
//             ))}
//         </ul>
//     </>
//   )
// }

// MoviesList.propTypes = {
//   movies: PropTypes.array.isRequired,
// };

// export default MoviesList

