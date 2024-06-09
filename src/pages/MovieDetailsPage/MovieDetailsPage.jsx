import MovieInfo from '../../components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmDetails } from '../../components/movies-api';

export default function MovieDetailsPage () {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const currentMovie = await getFilmDetails(movieId);
        setCurrentMovie(currentMovie);
      } catch (error) {
        console.error('error', error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
        <MovieInfo {...currentMovie} />
    </div>
  );
}