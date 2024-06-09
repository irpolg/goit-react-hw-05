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
    const response = await axios.get(`/trending/movie/day`, options)
    console.log("response >>", response);
    return response.data;
};

export const getFilmDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
};


//blended-03
// export const fetchFilm = async moveId => {
//   const { data } = await axios.get(`/name/${id}`);
//   const country = transformCountryData(Object.values(data));

//   return country[0];
// };

