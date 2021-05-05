import React, {useState} from 'react';
import styles from './MovieItem.module.css'
import CustomProgressBar from "../progressbar/CustomProgressBar";
import wishList_chosen from '../../img/wishListOfFilms-CHOOSEN.png.png'
import wishList_Not_chosen from '../../img/wishListOfFilms-NOT_CHOOSEN.png'

export default function MovieItem(props) {
    const {movie: {poster_path, original_title, vote_average, release_date, original_language, movieGenresList}} = props;
    const [wishListFlag, setWishListFlag] = useState(false);

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

// movieGenresList

    const imgBuilder = (poster_path, img_size = 500) => `https://image.tmdb.org/t/p/w${img_size}${poster_path}`

    const liPosterDiv = React.createRef();
    const [voteFlag, setVoteFlag] = useState(false)

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
        setVoteFlag(true)
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
        setVoteFlag(false)
    }

    const wishlistHandler = () => {
        if (wishListFlag === false) {
            setWishListFlag(true)
            return
        }
        setWishListFlag(false)
    }
    return (
        <li onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}>
            <div className={styles.liPoster}>
                <div ref={liPosterDiv}>
                    <div className={styles.text}>

                        <div className={styles.miniDescriptionMenu}>
                            <div className={styles.imgWishList_Div} onClick={wishlistHandler}>
                                <img src={wishListFlag === false ? wishList_Not_chosen : wishList_chosen}
                                     alt="wishList" width={20} height={20}/>
                            </div>

                        </div>

                        <div className={styles.miniDescription}>
                            <div className={styles.vote_averageDiv}>
                                <span
                                    className={styles.vote_average}>{vote_average % 1 !== 0 ? vote_average : vote_average + '.0'}</span>
                                <div className={styles.customProgressBar}>
                                    {voteFlag && <CustomProgressBar valueEnd={vote_average}/>}
                                </div>

                            </div>

                            <span>{release_date.slice(0, 4)}, </span>
                            <span>{original_language.toUpperCase()},</span> <br/>
                            <span>{movieGenresList[0].name}</span> <br/>
                            <span>{(Math.random() * (200 - 60) + 60).toFixed()} minutes</span>
                        </div>

                    </div>
                    <div>
                        <img className={styles.posterImg}
                             src={imgBuilder(poster_path)}
                             alt={`${original_title}`}/>
                    </div>

                </div>


            </div>
            <div className={styles.miniDescribe}>{original_title}</div>
        </li>

    );
}
