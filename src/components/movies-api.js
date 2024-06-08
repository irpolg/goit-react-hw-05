// webinar
// import axios from 'axios'

// axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1'

// export const getProductsApi = async () => {
// 	const { data } = await axios.get('/products')
// 	return data
// }

// export const getSingleProductApi = async (id) => {
// 	const { data } = await axios.get(`/products/${id}`)
// 	return data
// }


//https://developer.themoviedb.org/reference/trending-movies 

//slack 5-hw
import axios from "axios";
//https://developer.themoviedb.org/reference/trending-movies 
//"https://api.themoviedb.org/3/trending"
const bearer_token = "a28722a8c97664c4233c09ba9786f7fd"; //Ключ API
const BASE_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: bearer_token,
  },
});

export const fetchMovies = async () => {
  const response = await instance.get("/trending/movie/day");
  return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await instance.get("/search/movie", {
        params: {
            query,
            page: 1,
            language: "en-US",
            include_adult: true,
        },
    });

    return response.data.results;
};