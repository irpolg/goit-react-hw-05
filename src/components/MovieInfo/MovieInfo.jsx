import css from './MovieInfo.module.css';
//import MovieCast from '../MovieCast/MovieCast';
//import MovieReviews from '../MovieReviews/MovieReviews';
//import { Suspense } from 'react';
import { Link } from 'react-router-dom';

const defaultImg = {
  poster:
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg',
  title: 'Title not found',
};

export const MovieInfo = ({ id, poster_path, title, overview }) => {
    return (
        <>
        <div className={css.wrapper}>
            <div className={css.poster}>
                <img className={css.img}
                    src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}`
                        : defaultImg.poster}
                    alt={title || defaultImg.title} />
            </div>
            <div className={css.box}>
                <h3 className={css.title}>
                    {/* {title || defaultImg.title} */}
                    <Link to={`/movies/${id}`} state={location} className={css.movieName}>
                        {title || defaultImg.title}
                    </Link>
                </h3>
                <p className={css.accent}>
                    Overview: 
                </p>  
                <p className={css.overview}>{overview}</p>
            </div>
            </div>
            {/* <Suspense>
                <MovieCast movieId={id} />
            </Suspense>
            <Suspense>
                <MovieReviews movieId={id} />
            </Suspense> */}
        </>
    )
};


// Suspense - це компонент, який дозволяє затримати відображення
// певного вмісту (наприклад, компонента) до тих пір,
// поки не завантажаться необхідні дані.
    // fallback для компонента Suspense React 
    // ви вказуєте елемент, який має відображатися 
    // під час очікування завантаження компонента