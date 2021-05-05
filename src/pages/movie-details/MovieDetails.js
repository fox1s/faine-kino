import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {moviesService} from "../../services";

export default function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

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

    useEffect(() => {
        getMovieDetails().then(r => r);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (isLoading === true || isLoading === null) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {movieDetails.original_title}
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
