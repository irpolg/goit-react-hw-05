import css from './MovieInfo.module.css';

const defaultImg = {
  poster:
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg',
  title: 'Title not found',
};

export const MovieInfo = ({ poster_path, title, overview }) => {
    return (
        <div className={css.wrapper}>
            <div className={css.poster}>
                <img className={css.img}
                    src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}`
                        : defaultImg.poster}
                    alt={title || defaultImg.title} />
            </div>
            <div className={css.box}>
                <h3 className={css.title}>
                    Title: <span className={css.accent}>{title || defaultImg.title}</span>
                </h3>
                <p className={css.overview}>
                    Owerview: <span className={css.accent}>{overview}</span>
                </p>
            </div>
        </div>
    )
};