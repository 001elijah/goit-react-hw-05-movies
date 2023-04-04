import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFromTmdb } from 'services/tmdbAPI';

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getFromTmdb()
            .then(({ results }) => setMovies(results))
            .catch(error => console.log(error));
    }, []);
    return (
        <>
            <h1>Trending Today</h1>
            <ul>
                {movies.map(movie => <li key={movie.id}><Link to={`movies/${movie.id}`}>{movie.title}</Link></li>)}
            </ul>
        </>
    );
};