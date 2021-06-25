import React, {useEffect, useState} from "react";
import {Link, NavLink, useParams} from 'react-router-dom';
import {moviesService} from "../../services";
import styles from "./MovieDetails.module.css";
import {imgBuilder} from "../../services/imgBuilder";

import clock from '../../img/clock.png'
import play from '../../img/play.png'
import wishListNotChosen from '../../img/wishListOfFilms-NOT_CHOOSEN.png'
import wishListChosen from '../../img/wishListOfFilms-NOT_CHOOSEN.png'
import CustomProgressBar from "../../components/progressbar/CustomProgressBar";
// import YouTube from "react-youtube";
// import {youtubeService} from "../../services/YoutubeService";


export default function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    // const [test, setTest] = useState(null);
    const [wishListFlag, setWishListFlag] = useState(false);

    const {id} = useParams();

    const getMovieDetails = async () => {
        try {
            setIsLoading(true);
            const data = await moviesService.getMovieDetailsById(id);
            setMovieDetails(data);
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false);
        }
    }

    // const getYoutubeVideo = async () => {
    //     try {
    //         console.log(movieDetails.title)
    //         const youtubeData = await youtubeService.getVideoByName(movieDetails.title);
    //         setTest(youtubeData)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    useEffect(() => {
        getMovieDetails().then(r => r);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // useEffect(() => {
    //     console.log('zapusk')
    //     if (movieDetails.hasOwnProperty('original_title')) {
    //         console.log('start...........................................................')
    //         console.log(movieDetails)
    //         getYoutubeVideo().then(r => r);
    //     }
    // },[])

    if (isLoading || !movieDetails || isLoading === null) {
        return <div>Loading...</div>
    }

    // const opts = {
    //     height: '600',
    //     width: '906',
    //     playerVars: {
    //         // https://developers.google.com/youtube/player_parameters
    //         autoplay: 0,
    //     },
    // };

    // const onReady = (e) => {
    //     // access to player in all event handlers via event.target
    //     // e.target.pauseVideo();
    // }

    const onWishListBtn = (e) => {
        const btn = e.currentTarget;

        if (wishListFlag === true) {
            btn.style.border = '1px solid #7e798f';
            btn.style.color = '#7e798f';
            setWishListFlag(false)
            return
        }

        btn.style.border = '2px solid white';
        btn.style.color = 'white';
        setWishListFlag(true);
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

                        <div className={styles.btnANDProgressbar}>
                            <div className={styles.buttonWatchANDWishList}>
                                <a href="#movie" className={styles.watchBtn}><img src={play} alt="play"
                                                                                  width={20}/><span>Watch</span></a>
                                <button className={styles.wishListBtn} onClick={onWishListBtn}>
                                    <img src={wishListFlag === true ? wishListChosen : wishListNotChosen}
                                         alt="wishList" width={20}/><span>Wishlist</span></button>
                            </div>

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

                                <CustomProgressBar valueEnd={movieDetails.vote_average} widthCustom={70}
                                                   strokeWidth={17}
                                    /*roundedValue={movieDetails.vote_count}*//>
                            </div>
                        </div>


                        <div className={styles.miniDescribe}>
                            {!!movieDetails.release_date && (<Link to={'#'}>{movieDetails.release_date.toString().slice(0, 4)},</Link>)}

                            <span> {movieDetails.genres.map((el, i) =>
                                <span key={i}>
                                    <Link to={`/${el.name.toLowerCase()}-movies`}>{el.name}</Link>
                                    <span>{i !== movieDetails.genres.length - 1 && ', '}</span>
                                </span>
                            )}</span>

                            <span className={styles.miniClock}><img src={clock} alt="clock" width={18}
                                                                    style={{marginBottom: '3px'}}/> {movieDetails.runtime} min</span>
                        </div>

                        <div className={styles.itemDetail}>
                            <div className={styles.detailNameItem}>Release date</div>
                            <div className={styles.detailBodyItem}>{!!movieDetails.release_date ?
                                <span>{movieDetails.release_date}</span> : <span>unknown</span>}</div>
                        </div>

                        <div className={styles.itemDetail}>
                            <div className={styles.detailNameItem}>Languages:</div>
                            <div className={styles.detailBodyItem}>
                                {movieDetails.spoken_languages.map((lan, i) =>
                                    <span key={i}>
                                        {lan.english_name}{i !== movieDetails.spoken_languages.length - 1 && ', '}
                                    </span>)}
                            </div>
                        </div>

                        <div className={styles.itemDetail}>
                            <div className={styles.detailNameItem}>Production Countries:</div>
                            <div className={styles.detailBodyItem}>{movieDetails.production_countries.map((el, i) =>
                                <span key={i}>
                                {el.name}{i !== movieDetails.production_countries - 1 && ', '}
                            </span>)}</div>
                        </div>

                        <div className={styles.itemDetail}>
                            <div className={styles.detailNameItem}>Production Companies:</div>
                            <div className={styles.detailBodyItem}>{movieDetails.production_companies.map((el, i) =>
                                <span key={i}>
                                {el.name}{i !== movieDetails.production_companies - 1 && ', '}
                            </span>)}</div>
                        </div>

                        <div className={styles.itemDetail}>
                            <div className={styles.detailNameItem}>Runtime</div>
                            <div className={styles.detailBodyItem}>{movieDetails.runtime} minutes</div>
                        </div>

                    </div>

                </div>

                <div className={styles.detailsDescription}>
                    <div>OverView</div>
                    <p>{movieDetails.overview}</p>
                </div>

                <div>
                    <div className={styles.movie} id={'movie'}>
                        {/*{test && <YouTube videoId={test.items[0].id.videoId} opts={opts}/>}*/}
                        {/*<YouTube videoId={'XW2E2Fnh52w'} opts={opts}/>*/}
                    </div>
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
