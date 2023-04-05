import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useLocation, useNavigate } from "react-router-dom"
import { getMovieDetails } from "services/tmdbAPI";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getMovieDetails(movieId)
            .then(movie => setMovie(movie))
            .catch(error => console.log(error));
    }, [movieId]);

    const handleGoBack = () => {
        const prevPageLocation = location.state;
        navigate(prevPageLocation);
    }

    return (
        <>
            <button type="button" onClick={handleGoBack}>Go back</button>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}` ?? null} alt={`${movie.title} Poster`} />
            <h1>{movie.title} ({movie.release_date?.slice(0, 4) ?? "unknown release year"})</h1>
            <p>User Score: {Math.floor(movie.vote_average)} / 10</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            {<span>{movie.genres?.map(genre => `${genre.name} `)}</span>}
            <h3>Additional information</h3>
            <ul>
                <li key='cast'><Link to='cast'>Cast</Link></li>
                <li key='reviews'><Link to='reviews'>Reviews</Link></li>
            </ul>
            <Outlet />
        </>
    )
};

export default MovieDetails;