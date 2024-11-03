import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import css from './AdditionalInformation.module.css';

const AdditionalInformation = () => {
    const { movieId } = useParams();
    const NAVIGATION = ['Cast', 'Reviews']; 

    return (
        <div>
            <ul className={css.list}>
                {NAVIGATION.map((page) => (
                    <li key={page}>
                        <Link to={`/goit-react-hw-05-movies/movies/${movieId}/${page.toLowerCase()}`}>
                            {page}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
}

export default AdditionalInformation;




