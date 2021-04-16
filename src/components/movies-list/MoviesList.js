import styles from "./MoviesList.module.css";
import React, {useEffect, useState} from 'react'
import './test.css';
import arrowRight from '../../img/arrow-right.png'
import arrowLeft from '../../img/arrow-left.png'
import MovieItem from "../movie-item/MovieItem";

// todo порядок з css

export function MoviesList({movies}) {
    const [btnFlag, setBtnFlag] = useState({rightBtn: false, leftBtn: true});
    // const [counter, setCounter] = useState(0)


    let carousel = React.createRef()
    const listOfPosters = React.createRef()

    let position = 0; // положення стрічки прокрутки
    let countOfPoster = 7;
    let widthOfPoster = 153 + 24.2;

    const onClickNextBtn = () => {
        const allPosterCount = listOfPosters.current.children.length;
        position -= countOfPoster * widthOfPoster;
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
            {/*{movies.map(movie => <MovieItem movie={movie} key={movie.id}/>)}*/}

            <div className={'leftArrowDiv'}>

                {btnFlag.leftBtn &&
                <button className="arrow prev" onClick={onClickPrevBtn}>
                    <img className={'imgArrowLeft'} src={arrowLeft}
                         alt="right Arrow"/>
                </button>}
            </div>


            <div id="carousel" className="carousel" ref={carousel}>
                <div className="gallery">
                    <ul className="images" ref={listOfPosters}>
                        {movies && movies.map(movie => <MovieItem movie={movie} key={movie.id}/>)}

                        {/*{movies && movies.map(movie =>*/}
                        {/*    <li key={movie.id}><img className={'posterImg'}*/}
                        {/*                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}*/}
                        {/*                            alt={`${movie.original_title}`}/></li>*/}
                        {/*)}*/}

                        <li className={'li_BtnAllMovies'}>
                            <button className={'btnAllMovies'}><span>Переглянути усі</span></button>
                        </li>

                    </ul>
                </div>
            </div>
            <div className={'rightArrowDiv'}>
                <button className="arrow next" onClick={onClickNextBtn}>
                    <img className={'imgArrowRight'} src={arrowRight}
                         alt="right Arrow"/>
                </button>
            </div>


        </div>
    );
}
