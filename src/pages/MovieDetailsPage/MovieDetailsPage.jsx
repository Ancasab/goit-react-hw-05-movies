import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import api from 'services/api';
import css from './MovieDetailsPage.module.css';
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation';

const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();
    const locationRef = useRef(useLocation().state);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.fetchMoviesWithId(movieId);
                const {
                    title,
                    overview,
                    poster_path,
                    vote_average,
                    genres,
                    release_date,
                } = response.data;

                setMovieDetails({
                    title,
                    overview,
                    poster_path,
                    vote_average,
                    genres,
                    release_date,
                });
            } catch (error) {
                console.error("Failed to fetch movie details:", error);
            }
        };

        fetchData();
    }, [movieId]);

    if (!movieDetails) {
        return <p>Loading...</p>;
    }

    const { title, overview, poster_path, vote_average, genres, release_date } = movieDetails;

    return (
        <>
            {locationRef.current && (
                <Link
                    className={css.link}
                    to={locationRef.current.location}
                    state={locationRef.current.search}>
                    <span>&#8592; Go back</span>
                </Link>
            )}
            <div className={css.info}>
                <img className={css.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                <div className={css.text}>
                    <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
                    <p>{`User score: ${vote_average * 10}%`}</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genres.map(({ name }) => name).join(', ')}</p>
                </div>
            </div>
            <p>Additional Information</p>
            <AdditionalInformation />
        </>
    );
};

export default MovieDetailsPage;




