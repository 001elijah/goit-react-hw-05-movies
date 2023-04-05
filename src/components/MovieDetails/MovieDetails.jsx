import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useLocation, useNavigate } from "react-router-dom"
import { getMovieDetails } from "services/tmdbAPI";

import { FlexWrapper, Wrapper, Button } from "./MovieDetails.style";

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
        <div>
            <Button type="button" onClick={handleGoBack}>Go back</Button>
            <FlexWrapper>
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}` ?? null} alt={`${movie.title} Poster`} />
                <div>
                    <h1>{movie.title} ({movie.release_date?.slice(0, 4) ?? "unknown release year"})</h1>
                    <p>User Score: {Math.floor(movie.vote_average)} / 10</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h2>Genres</h2>
                    {<span>{movie.genres?.map(genre => `${genre.name} `)}</span>}
                </div>
            </FlexWrapper>
            <Wrapper>
                <h3>Additional information</h3>
                <ul>
                    <li key='cast'><Link to='cast' state={location.state}>Cast</Link></li>
                    <li key='reviews'><Link to='reviews' state={location.state}>Reviews</Link></li>
                </ul>
            </Wrapper>
            <Outlet />
        </div>
    )
};

export default MovieDetails;