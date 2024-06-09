// вебінар
// const HomePage = () => {
// 	return <div>HomePage</div>
// }

// export default HomePage

import { useEffect, useState } from 'react';
import { MovieList } from '../../components/MovieList/MovieList';
import { getFilms } from '../../components/movies-api';
// import Loader from '../../components/Loader/Loader';
import css from './HomePage.module.css';

export const HomePage = () => {
const [films, setFilms] = useState([]);
// const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFilms = async () => {
        try {
            const films = await getFilms();
            setFilms(films.results);
        } catch (error) {
            console.error('error', error);
        }
    //   } finally {
    //      setIsLoading(false);
    //   }
    };
    fetchFilms();
  }, []);

    return (
        <div>
        {/* {isLoading && <Loader />} */}
            <h2 className={css.title}>Trending movies this week</h2>
            <MovieList films={films} />
        </div>
  );
};

//blended-03
