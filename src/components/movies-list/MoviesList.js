import styles from "./MoviesList.module.css";
import React, {useEffect, useState} from 'react'
import './test.css';
import arrowRight from '../../img/arrow-right.png'
import arrowLeft from '../../img/arrow-left.png'

// todo порядок з css

export function MoviesList({movies}) {
    // const [flagBtn, setFlagBtn] = useState({counter: 0, flagRight: false, flagLight: false})
    const [flagBtn, setFlagBtn] = useState({flagRight: false})
    const [flagBtn2, setFlagBtn2] = useState({flagLeft: true})


    let carousel = React.createRef()
    const listOfPosters = React.createRef()

    let position = 0; // положення стрічки прокрутки
    let countOfPoster = 7;
    let widthOfPoster = 153 + 24.2;

    const onClickNextBtn = () => {
        const allPosterCount = listOfPosters.current.children.length;
        position -= countOfPoster * widthOfPoster;
        position = Math.max(position, -widthOfPoster * ((allPosterCount + 1) - countOfPoster))

        listOfPosters.current.style.marginLeft = `${position}px`;   // додаємо марджин з лівого боку, поки не настане
                                                                    // максимальне допустиме значення.
    }

    const onClickPrevBtn = () => {
        position += countOfPoster * widthOfPoster; //рухаєм вліво
        position = Math.min(position, 0); // якщо стає > 0 (тобто виходить за межі) сетаєм в 0. Це робить межу для руху.
        listOfPosters.current.style.marginLeft = `${position}px`; // забираємо марджин з лівого боку, поки не стане 0.
    }

    console.log(flagBtn.flagRight)

    return (
        <div className={styles.tapeMovies}>
            {/*{movies.map(movie => <MovieItem movie={movie} key={movie.id}/>)}*/}
            {/*{spliceMovies.map((movie) => <MovieItem {...movie} btnRight key={movie.id}/>)}*/}
            {/*<button>left</button>*/}

            <button className="arrow prev" onClick={onClickPrevBtn} disabled={!flagBtn2.flagLeft}>
                <img className={'imgArrowLeft'} src={arrowLeft}
                     alt="right Arrow"/>
            </button>


            <div id="carousel" className="carousel" ref={carousel}>
                <div className="gallery">
                    <ul className="images" ref={listOfPosters}>
                        {movies && movies.map(movie =>
                            <li key={movie.id}><img className={'posterImg'}
                                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                    alt={`${movie.original_title}`}/></li>
                        )}
                        {/*<button className={'btnAllMovies'}>Переглянути усі</button>*/}
                    </ul>
                </div>

            </div>
            <button className="arrow next" onClick={onClickNextBtn} disabled={flagBtn.flagRight}>
                <img className={'imgArrowRight'} src={arrowRight}
                     alt="right Arrow"/>
            </button>

        </div>
    );
}
