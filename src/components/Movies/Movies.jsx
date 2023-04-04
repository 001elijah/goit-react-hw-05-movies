import { Link, Outlet } from "react-router-dom";
import { searchMovieByQuery } from "services/tmdbAPI";

const { useState } = require("react")

export const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const handleQuerySubmit = evt => {
        evt.preventDefault();
        if (query.trim() === '') {
            console.log("Enter search query!");
            return;
        };
        searchMovieByQuery(query)
            .then(({ results }) => setMovies(results))
            .catch(error => console.log(error));
        // searchbarToAppQuery(query);
        setQuery('');
    };
    return (
        <>
            <form onSubmit={handleQuerySubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies by title"
                    value={query}
                    onChange={evt => setQuery(evt.currentTarget.value.toLowerCase())}
                />
                <button type="submit">
                    <span>Search</span>
                </button>
                
            </form>
            <ul>
                {movies.map(movie => <li key={movie.id}><Link to={`${movie.id}`}>{movie.title}</Link></li>)}
            </ul>
            <Outlet />
        </>
        
    )
}