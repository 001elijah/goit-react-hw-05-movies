import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "services/tmdbAPI";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getMovieDetails(movieId, 'reviews')
            .then(reviews => setReviews(reviews.results))
            .catch(error => console.log(error));
    }, [movieId]);

    return (
        <>
            {reviews.length !== 0 ?
                <ul>
                    {reviews.map(({ author_details, author, content, id }) =>
                        <li key={id}>
                            {author_details.avatar_path && <img src={`https://image.tmdb.org/t/p/w45${author_details.avatar_path}`} alt={author} />}
                            <p>Author: {author}</p>
                            <p>{content}</p>
                        </li>
                        )}
                </ul> :
                <p>No reviews for this movie yet.</p>
            }
        </>
    );
};

export default Reviews;