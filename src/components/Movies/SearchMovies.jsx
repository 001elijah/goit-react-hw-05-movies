import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { searchMovieByQuery } from "services/tmdbAPI";

const SearchMovies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const location = useLocation();

    const handleQuerySubmit = evt => {
        evt.preventDefault();
        if (query.trim() === '') {
            console.log("Enter search query!");
            return;
        };

        searchMovieByQuery(query)
            .then(({ results }) => setMovies(results))
            .catch(error => console.log(error));
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
                {movies.map(movie => <li key={movie.id}><Link to={`${movie.id}`} state={location}>{movie.title}</Link></li>)}
            </ul>
        </>
    );
};
 
export default SearchMovies;