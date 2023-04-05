import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getFromTmdb } from 'services/tmdbAPI';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    const location = useLocation();

    useEffect(() => {
        getFromTmdb()
            .then(({ results }) => setMovies(results))
            .catch(error => console.log(error));
    }, []);
    return (
        <>
            <h1>Trending Today</h1>
            <ul>
                {movies.map(movie => <li key={movie.id}><Link to={`movies/${movie.id}`} state={location}>{movie.title}</Link></li>)}
            </ul>
        </>
    );
};

export default HomePage;