import React from 'react';
import styles from './MovieItem.module.css'

export default function MovieItem(props) {
    const {movie: {poster_path, original_title}} = props;

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
    return (

        <li>
            <img className={styles.posterImg}
                 src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                 alt={`${original_title}`}/>
        </li>

    );
}
