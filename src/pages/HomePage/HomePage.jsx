// вебінар
// const HomePage = () => {
// 	return <div>HomePage</div>
// }

// export default HomePage


// import { Container, MovieList, Section } from 'components';
import { MovieList } from '../../components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getFilms } from '../../components/movies-api';

export const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const films = await getFilms();
        setFilms(films);
      } catch (error) {
        console.error('error', error);
      }
    };
    fetchFilms();
  }, []);

    return (
        <div>
            <MovieList films={films} />
        </div>
  );
};

//blended-03
    // <Section>
    //   <Container>
        // <MovieList countries={films} />
    //   </Container>
        // </Section>