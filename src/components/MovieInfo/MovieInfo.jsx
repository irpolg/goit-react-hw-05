
import css from './MovieInfo.module.css';
import { Link, useLocation } from 'react-router-dom';

// const defaults = {
const defaultImg = {
  poster:
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg',
  title: 'Title not found',
};

export default function MovieInfo({ movie }) {
    const location = useLocation();

    return (
        <div className={css.info}>
            <div className={css.poster}>
                <img className={css.poster} 
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : defaultImg.poster} 
                alt={movie.title || defaultImg.title} />
            </div>
            <div className={css.title}>
                <Link to={`/movies/${movie.id}`} state={location} className={css.movieName}>
                    {movie.title || defaultImg.title}
                </Link>
            </div>
        </div>
    );
}


// const defaultImg = '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>'

// <img src={
//  movieData.poster_path ?
//  [<https://image.tmdb.org/t/p/w500/${movieData.poster_path}>](<https://image.tmdb.org/t/p/w500/$%7BmovieData.poster_path%7D>)
//  : defaultImg
// }
// width={250}
// alt="poster"
// />