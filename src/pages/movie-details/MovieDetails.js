import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {moviesService} from "../../services";
import styles from "./MovieDetails.module.css";
import {imgBuilder} from "../../services/imgBuilder";

import clock from '../../img/clock.png'
import CustomProgressBar from "../../components/progressbar/CustomProgressBar";

export default function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const {id} = useParams();

    const getMovieDetails = async () => {
        try {
            setIsLoading(true);
            const data = await moviesService.getMovieDetailsById(id);
            console.log(data)
            setMovieDetails(data);
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getMovieDetails().then(r => r);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (isLoading || !movieDetails || isLoading === null) {
        return <div>Loading...</div>
    }
    return (
        <div className={styles.movieDetails_wrapper}>
            <div className={styles.movieDetails}>
                <div className={styles.title_div}>{movieDetails.title}</div>
                <div className={styles.tagline_div}>{movieDetails.tagline}</div>

                <div className={styles.detailsCommon}>
                    <div>
                        <img src={imgBuilder(movieDetails.poster_path)}
                             alt={movieDetails.original_title + 'poster'}
                             className={styles.imgPosterDetails}
                        />
                    </div>

                    <div className={styles.right_detailsCommon}>
                        <div className={styles.customProgressBar}>
                            <div className={styles.textRating_Div}>
                                <div>
                                    <span
                                        className={styles.firstVoteNumber}>{movieDetails.vote_average.toString()[0]}</span>
                                    <span
                                        className={styles.secondVoteNumber}>,{movieDetails.vote_average.toString()[2]}</span>
                                </div>
                                <div className={styles.textRating}>Rating f-kino</div>
                            </div>

                            <CustomProgressBar valueEnd={movieDetails.vote_average} widthCustom={70} strokeWidth={17}
                                /*roundedValue={movieDetails.vote_count}*//>
                        </div>

                        <div>Release date {movieDetails.release_date}</div>
                        <div>Languages: {movieDetails.spoken_languages.map((lan, i) =>
                            <span key={i}>
                                {lan.english_name}{i !== movieDetails.spoken_languages.length - 1 && ', '}
                            </span>)}
                        </div>

                        <div>Production Countries: {movieDetails.production_countries.map((el, i) =>
                            <span key={i}>
                                {el.name}{i !== movieDetails.production_countries - 1 && ', '}
                            </span>)}
                        </div>

                        <div>Production Companies: {movieDetails.production_companies.map((el, i) =>
                            <span key={i}>
                                {el.name}{i !== movieDetails.production_companies - 1 && ', '}
                            </span>)}
                        </div>

                        <div>
                            <img src={clock} alt="clock" width={18}/> {movieDetails.runtime} minutes
                        </div>
                    </div>

                </div>

                <div className={styles.detailsDescription}>
                    <div>Description</div>
                    <p>{movieDetails.overview}</p>
                </div>

            </div>

        </div>
    );
}


// adult: false
// backdrop_path: "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
// belongs_to_collection: null
// budget: 20000000
// genres: Array(5) [ {…}, {…}, {…}, … ]
// homepage: "https://www.mortalkombatmovie.net"
// id: 460465
// imdb_id: "tt0293429"
// original_language: "en"
// original_title: "Mortal Kombat"
// overview: "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
// popularity: 5088.686
// poster_path: "/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg"
// production_companies: Array(6) [ {…}, {…}, {…}, … ]
// production_countries: Array [ {…}, {…} ]
// release_date: "2021-04-07"
// revenue: 50115000
// runtime: 110
// spoken_languages: Array(3) [ {…}, {…}, {…} ]
// status: "Released"
// tagline: "Get over here."
// title: "Mortal Kombat"
// video: false
// vote_average: 7.8
// vote_count: 2061
