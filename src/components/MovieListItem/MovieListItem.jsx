import PropTypes from "prop-types";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function MovieListItem({ title, id }) {
    const [searchParams] = useSearchParams();
    const location = useLocation();

    return (
        <li>
            <Link 
                to={`/goit-react-hw-05-movies/movies/${id}`}
                state={{
                    location: location.pathname,
                    search: searchParams.get('query'),
                }}
            >
                {title}
            </Link>
        </li>
    );
}

MovieListItem.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};
