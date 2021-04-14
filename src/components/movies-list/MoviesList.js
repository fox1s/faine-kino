import MovieItem from "../movie-item/MovieItem";
import styles from "./MoviesList.module.css";
import React, {useEffect, useState} from 'react'
import './test.css'


export function MoviesList({movies}) {
    // const [spliceMovies, setSpliceMovies] = useState([])
    // console.log(spliceMovies)
    // const movieCarousel = () => {
    //     const splice = movies.splice(0, 7)
    //     setSpliceMovies(splice)
    // }
    // useEffect(() => {
    //     movieCarousel()
    // }, [])

    return (
        <div className={styles.tapeMovies}>
            {/*{movies.map(movie => <MovieItem movie={movie} key={movie.id}/>)}*/}
            {/*{spliceMovies.map((movie) => <MovieItem {...movie} btnRight key={movie.id}/>)}*/}
            {/*<button>left</button>*/}


            {/*{movies.length &&*/}
            {/*<div id="carouselExampleControls" className="carousel slide">*/}
            {/*    <div className="carousel-inner">*/}
            {/*        <div className="carousel-item active ">*/}
            {/*            <div className="row_custom">*/}
            {/*                <img src={`https://image.tmdb.org/t/p/w200${movies[0].poster_path}`}*/}
            {/*                     className="d-block w-100" alt="..."/>*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[1].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[2].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[3].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[4].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[5].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[6].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*        <div className="carousel-item">*/}
            {/*            <div>*/}
            {/*                <img src={`https://image.tmdb.org/t/p/w200${movies[7].poster_path}`}*/}
            {/*                     className="d-block w-100" alt="..."/>*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[8].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[9].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[10].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[11].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[12].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[13].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="carousel-item">*/}
            {/*            <div className="row_custom">*/}
            {/*                <img src={`https://image.tmdb.org/t/p/w200${movies[14].poster_path}`}*/}
            {/*                     className="d-block w-100" alt="..."/>*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[15].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[16].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[17].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[18].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[19].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*                /!*<img src={`https://image.tmdb.org/t/p/w200${movies[18].poster_path}`}*!/*/}
            {/*                /!*     className="d-block w-100" alt="..."/>*!/*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"*/}
            {/*            data-bs-slide="prev">*/}
            {/*        <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
            {/*        <span className="visually-hidden">Предыдущий</span>*/}
            {/*    </button>*/}
            {/*    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"*/}
            {/*            data-bs-slide="next">*/}
            {/*        <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
            {/*        <span className="visually-hidden">Следующий</span>*/}
            {/*    </button>*/}
            {/*</div>}*/}


        </div>
);
}
