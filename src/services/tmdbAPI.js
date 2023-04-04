import axios from "axios";

const API_KEY = '62b98c2ee90b8cb7c57f2d936e771a35';

axios.defaults.baseURL = "https://api.themoviedb.org";

export const getFromTmdb = () => {
    return axios
        // https://api.themoviedb.org/3/trending/movie/week?api_key=62b98c2ee90b8cb7c57f2d936e771a35
        .get('/3/trending/movie/week', {
            params: {
                api_key: API_KEY,
            }
        })
    .then(result => result.data)
};

export const searchMovieByQuery = (query) => {
    return axios
        // https://api.themoviedb.org/3/search/movie?api_key=62b98c2ee90b8cb7c57f2d936e771a35&query=avatar&include_adult=true
        .get('/3/search/movie', {
        params: {
            api_key: API_KEY,
            query,
            include_adult: true
        }
        })
    .then(result => result.data)
}

export const getMovieDetails = (id) => {
    return axios
        // https://api.themoviedb.org/3/movie/76600?api_key=62b98c2ee90b8cb7c57f2d936e771a35
        .get(`/3/movie/${id}`, {
        params: {
            api_key: API_KEY,
        }
        })
    .then(result => result.data)
}