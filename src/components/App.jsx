import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Cast from './Cast/Cast';
import Review from './Review/Review';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage')
);

const MoviesPage = lazy(() =>
  import('../pages/MoviesPage/MoviesPage')
);

const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);

export const App = () => {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="movies" element={<MoviesPage />}/>
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};


export default App