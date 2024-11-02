import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { css } from './AdditionalInformation.module.css';

const AdditionalInformation = () => {
    const { movieId } = useParams();
    const NAVIGATION = ['Cast', 'Review'];

    return (
        <div>
            <ul className={css.list}>
                {NAVIGATION.map((page, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/goit-react-hw-05-movies/movies/${movieId}/${page.toLowerCase()}`}>
                                {page}
                            </Link>
                        </li>
                    );
                })}
              
            </ul>
            <Outlet />
        </div>
    );
}

export default AdditionalInformation