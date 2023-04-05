import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "services/tmdbAPI";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        getMovieDetails(movieId, 'credits')
            .then(credits => setCast(credits.cast))
            .catch(error => console.log(error));
    }, [movieId]);

    return (
        <ul>
            {cast.map(({ profile_path, name, character, id }) =>
                <li key={id}>
                    {profile_path && <img src={`https://image.tmdb.org/t/p/w185${profile_path}`} alt={name} />}
                    <p>{name}</p>
                    {character && <p>Character: {character}</p>}
                </li>
            )}
        </ul>
    );
};

export default Cast;