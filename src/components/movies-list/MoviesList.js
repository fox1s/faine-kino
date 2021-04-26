import styles from "./MoviesList.module.css";
import React, {useState} from 'react'
import arrowRight from '../../img/arrow-right.png'
import arrowLeft from '../../img/arrow-left.png'
import MovieItem from "../movie-item/MovieItem";

// todo логіка кнопок

export function MoviesList({movies}) {
    const [btnFlag, setBtnFlag] = useState({rightBtn: true, leftBtn: false});
    const [statePosition, setStatePosition] = useState(0); // положення стрічки прокрутки

    const listOfPosters = React.createRef()

    let countOfPoster = 7;
    let widthOfPoster = 177.2;

    const onClickNextBtn = () => {

        let position = statePosition; // положення стрічки прокрутки

        const allPosterCount = listOfPosters.current.children.length;
        position -= countOfPoster * widthOfPoster; // рух вправо
        position = Math.max(position, -widthOfPoster * ((allPosterCount) - countOfPoster))
        listOfPosters.current.style.marginLeft = `${position}px`;   // додаємо марджин з лівого боку, поки не настане
                                                                    // максимальне допустиме значення.
        setStatePosition(position)

        if (position < -2000) {
            setBtnFlag({rightBtn: false, leftBtn: true})
        } else {
            setBtnFlag({rightBtn: true, leftBtn: true})
        }
    }

    const onClickPrevBtn = () => {
        let position = statePosition;

        position += countOfPoster * widthOfPoster; //рухаєм вліво
        position = Math.min(position, 0); // якщо стає > 0 (тобто виходить за межі) сетаєм в 0. Це робить межу для руху.
        listOfPosters.current.style.marginLeft = `${position}px`; // забираємо марджин з лівого боку, поки не стане 0.

        setStatePosition(position)

        if (position === 0) {
            setBtnFlag({rightBtn: true, leftBtn: false})
        } else {
            setBtnFlag({rightBtn: true, leftBtn: true})
        }
    }

    return (
        <div className={styles.tapeMovies}>

            <div className={styles.leftArrowDiv}>
                {
                    btnFlag.leftBtn &&
                    <button className={`${styles.arrow} ${styles.prev}`} onClick={() => {
                        onClickPrevBtn()
                    }}>
                        <img className={styles.imgArrowLeft} src={arrowLeft}
                             alt="right Arrow"/>
                    </button>
                }
            </div>


            <div className={styles.carousel}>
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
                {
                    btnFlag.rightBtn &&
                    <button className={`${styles.arrow} ${styles.next}`} onClick={() => {
                        onClickNextBtn()
                    }}>
                        <img className={styles.imgArrowRight} src={arrowRight}
                             alt="right Arrow"/>
                    </button>
                }

            </div>
        </div>
    );
}
