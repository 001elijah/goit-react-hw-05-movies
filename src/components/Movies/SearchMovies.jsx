import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { searchMovieByQuery } from "services/tmdbAPI";

import { Form, Input } from "./SearchMovies.style";

const SearchMovies = () => {
    const [search, setSearch] = useSearchParams(); // location
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);

    const location = useLocation();

    const query = search.get("query");

    useEffect(() => {
      searchMovieByQuery(query)
          .then(({ results }) => setMovies(results))
            .catch(error => console.log(error))
      }, [query])
    

    const handleQuerySubmit = evt => {
        evt.preventDefault();
        setError(null);
        if (input.trim() === '') {
            console.log("Enter search query!");
            return;
        };
        // setInput('');
        setSearch({ query: input });
    };
    
    return (
        <>
            <Form onSubmit={handleQuerySubmit}>
                <Input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies by title"
                    value={input}
                    onChange={evt => setInput(evt.currentTarget.value)}
                />
                <button type="submit">
                    <span>Search</span>
                </button>
                
            </Form>
            {error ?? <ul>
                {movies.map(movie => <li key={movie.id}><Link to={`${movie.id}`} state={location}>{movie.title}</Link></li>)}
            </ul>}
        </>
    );
};
 
export default SearchMovies;