import React from 'react';
import styles from './MovieItem.module.css'

export default function MovieItem(props) {
    const {movie: {poster_path, original_title, vote_average, release_date}} = props;

    // const {original_title, vote_average, release_date, poster_path} = props
// adult: false
// backdrop_path: "/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg"
// genre_ids: Array [ 53, 80 ]
// id: 602269
// key:
// original_language: "en"
// original_title: "The Little Things"
// overview: "Deputy Sheriff Joe \"Deke\" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case."
// popularity: 648.569
// poster_path: "/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg"
// release_date: "2021-01-28"
// title: "The Little Things"
// video: false
// vote_average: 6.4
// vote_count: 740

    const liPosterDiv = React.createRef();


    const onMouseOver = () => {
        let details = liPosterDiv.current.children[0];
        let posterDiv = liPosterDiv.current.children[1];

        details.style.zIndex = 1;
        details.style.cursor = 'pointer';

        details.style.transform = 'scale(1.06)';
        details.style.transition = '0.4s'

        posterDiv.style.transform = 'scale(1.06)';
        posterDiv.style.transition = '0.4s';
        posterDiv.style.opacity = '0.3';

    }

    const onMouseOut = () => {
        let details = liPosterDiv.current.children[0];
        let posterDiv = liPosterDiv.current.children[1];

        details.style.zIndex = 0;

        details.style.transform = 'scale(1)';
        details.style.transition = '0.4s'

        posterDiv.style.transform = 'scale(1)';
        posterDiv.style.transition = '0.4s';
        posterDiv.style.opacity = '1';

    }

    return (
        <li onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <div className={styles.liPoster}>
                <div ref={liPosterDiv}>
                    <div className={styles.text}>
                        <span>efew</span> <br/>
                        <span>vote_average</span> <br/>
                        <span>{release_date}</span> <br/>
                        <span>{vote_average}</span>
                    </div>
                    <div className={styles.imgDiv}>
                        <img className={styles.posterImg}
                             src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                             alt={`${original_title}`}/>
                    </div>

                </div>


            </div>
            <div className={styles.miniDescribe}>{original_title}</div>
        </li>

    );
}
