import { MovieInfo } from '../../components/MovieInfo/MovieInfo';
import { Container } from '../../components/Container/Container';

import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getFilmDetails } from '../../components/movies-api';
import css from './MovieDetailsPage.module.css'; //

export default function MovieDetailsPage () {
    const { movieId } = useParams();
    const [currentMovie, setCurrentMovie] = useState({});
    const location = useLocation(); //отримати поточну локацію сторінки
    const goBackRef = useRef(location.state ?? '/movies'); //посилання goBackRef, де location.state - початкове значення
    
    useEffect(() => {
    const getData = async () => {
      try {
        const currentMovie = await getFilmDetails(movieId);
        setCurrentMovie(currentMovie);
      } catch (error) {
        console.error('error-MovieDetailesPage >> ', error);
      }
    };
    getData();
    }, [movieId]);

    return (
        <div>
            <Link to={goBackRef.current} className={css.goBackBtn}>
                GO BACK
            </Link>
            <Container>
                <MovieInfo {...currentMovie} />
            </Container>
    </div>
  );
}