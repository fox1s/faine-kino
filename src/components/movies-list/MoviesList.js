import styles from "./MoviesList.module.css";
import React, {useState} from 'react'
import arrowRight from '../../img/arrow-right.png'
import arrowLeft from '../../img/arrow-left.png'
import MovieItem from "../movie-item/MovieItem";

// todo логіка кнопок

export function MoviesList({movies}) {
    const [btnFlag, setBtnFlag] = useState({rightBtn: false, leftBtn: true});


    let carousel = React.createRef()
    const listOfPosters = React.createRef()

    let position = 0; // положення стрічки прокрутки
    let countOfPoster = 7;
    let widthOfPoster = 177.2;

    const onClickNextBtn = () => {
        const allPosterCount = listOfPosters.current.children.length;
        position -= countOfPoster * widthOfPoster; // рух вправо

        position = Math.max(position, -widthOfPoster * ((allPosterCount) - countOfPoster))
        listOfPosters.current.style.marginLeft = `${position}px`;   // додаємо марджин з лівого боку, поки не настане
                                                                    // максимальне допустиме значення.
    }

    const onClickPrevBtn = () => {
        position += countOfPoster * widthOfPoster; //рухаєм вліво
        position = Math.min(position, 0); // якщо стає > 0 (тобто виходить за межі) сетаєм в 0. Це робить межу для руху.
        listOfPosters.current.style.marginLeft = `${position}px`; // забираємо марджин з лівого боку, поки не стане 0.
    }

    return (
        <div className={styles.tapeMovies}>

            <div className={styles.leftArrowDiv}>
                {btnFlag.leftBtn &&
                <button className={`${styles.arrow} ${styles.prev}`} onClick={onClickPrevBtn}>
                    <img className={styles.imgArrowLeft} src={arrowLeft}
                         alt="right Arrow"/>
                </button>}
            </div>


            <div className={styles.carousel} ref={carousel}>
                <div className={styles.gallery}>
                    <ul className={styles.images} ref={listOfPosters}>

                        {movies && movies.map(movie => <MovieItem movie={movie} key={movie.id}/>)}

                        <li>
                            <button className={styles.btnAllMovies}><span>Переглянути усі</span></button>
                        </li>

                    </ul>
                </div>
            </div>

            <div className={styles.rightArrowDiv}>
                <button className={`${styles.arrow} ${styles.next}`} onClick={onClickNextBtn}>
                    <img className={styles.imgArrowRight} src={arrowRight}
                         alt="right Arrow"/>
                </button>
            </div>

        </div>
    );
}
