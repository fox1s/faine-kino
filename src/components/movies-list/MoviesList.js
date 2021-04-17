import styles from "./MoviesList.module.css";
import React, {useEffect, useState} from 'react'
import arrowRight from '../../img/arrow-right.png'
import arrowLeft from '../../img/arrow-left.png'
import MovieItem from "../movie-item/MovieItem";

// todo логіка кнопок

export function MoviesList({movies}) {
    const [btnFlag, setBtnFlag] = useState({rightBtn: true, leftBtn: true});
    // const [counter, setCounter] = useState(1);


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


    const flag = () => {

        // switch (btnFlag.counter) {
        //     case 1: {
        //         setBtnFlag({counter: btnFlag.counter, rightBtn: true, leftBtn: false})
        //         console.log(btnFlag.counter)
        //         break;
        //     }
        //     case 2: {
        //         setBtnFlag({counter: btnFlag.counter, rightBtn: true, leftBtn: true})
        //         break
        //     }
        //     case 3: {
        //         setBtnFlag({counter: btnFlag.counter, rightBtn: false, leftBtn: true})
        //         break;
        //     }
        //     default: {
        //         break;
        //     }
        // }
    }

    // let clicks = 0;
    // let leftBtn = false;
    // let rightBtn = true;
    // const clickNext = () => {
    //     clicks += 1;
    //     console.log(clicks)
    //     if (clicks === 2) {
    //         rightBtn = false;
    //     } else {
    //         // rightBtn=true;
    //         leftBtn=true;
    //     }
    // }
    //
    // useEffect(() => {
    //     console.log('ssss')
    // },[clickNext])
    //
    // const clickPrev = () => {
    //     clicks -= 1;
    //     console.log(clicks)
    //     if (clicks === 0) {
    //     }
    // }

    return (
        <div className={styles.tapeMovies}>

            <div className={styles.leftArrowDiv}>
                {
                    btnFlag.leftBtn &&
                    <button className={`${styles.arrow} ${styles.prev}`} onClick={() => {
                        onClickPrevBtn()
                        // clickPrev()
                    }}>
                        <img className={styles.imgArrowLeft} src={arrowLeft}
                             alt="right Arrow"/>
                    </button>
                }
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
                {
                    btnFlag.rightBtn &&
                    <button className={`${styles.arrow} ${styles.next}`} onClick={() => {
                        onClickNextBtn()
                        // clickNext()
                    }}>
                        <img className={styles.imgArrowRight} src={arrowRight}
                             alt="right Arrow"/>
                    </button>
                }

            </div>

        </div>
    );
}
