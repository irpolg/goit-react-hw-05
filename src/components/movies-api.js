//slack 5-hw
//https://developer.themoviedb.org/reference/trending-movies 
//"https://api.themoviedb.org/3/trending"
//const bearer_token = "a28722a8c97664c4233c09ba9786f7fd"; //Ключ API

//https://developer.themoviedb.org/reference/movie-reviews
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjg3MjJhOGM5NzY2NGM0MjMzYzA5YmE5Nzg2ZjdmZCIsInN1YiI6IjY2NjFiNDM4ZmNiNjYzM2MzZmNiYjU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NIu4etY43JFm-Qbe6KJbhXB8RJ1zsQuoQXbKrS0CQYI'
//   }
// };

// fetch('https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


// Import the axios library
// import axios from "axios";

// // Define the bearer token for API authorization
// const bearer_token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjg3MjJhOGM5NzY2NGM0MjMzYzA5YmE5Nzg2ZjdmZCIsInN1YiI6IjY2NjFiNDM4ZmNiNjYzM2MzZmNiYjU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NIu4etY43JFm-Qbe6KJbhXB8RJ1zsQuoQXbKrS0CQYI';

// // Define the base URL for the API
// const BASE_URL = "https://api.themoviedb.org/3";

// // Create an instance of axios with base URL and authorization header
// const instance = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: bearer_token,
//   },
// });

// // Function to get all films
// export const getFilms = async () => {
//   const { data } = await instance.get('/all');
//   const films = Object.values(data);
//   return films;
// };
// Function to get all films
// export const getFilms = async () => {
//   const { data } = await instance.get('/trending');
//   return data.results;
// };


import axios from 'axios';
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjg3MjJhOGM5NzY2NGM0MjMzYzA5YmE5Nzg2ZjdmZCIsInN1YiI6IjY2NjFiNDM4ZmNiNjYzM2MzZmNiYjU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NIu4etY43JFm-Qbe6KJbhXB8RJ1zsQuoQXbKrS0CQYI'
  }
};

export const getFilms = async () => {
    //const { data } = await instance.get('/all');
    const response = await axios.get(`/trending/movie/week`, options)
    return response.data;
};

