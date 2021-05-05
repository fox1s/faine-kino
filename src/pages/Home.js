import React, {useEffect, useState} from "react";
import {MoviesList} from "../components";
import {genresService, moviesService} from "../services";
import styles from './Home.module.css'

export const Home = () => {
    const [moviesList, setMoviesList] = useState([])
    const [isLoading, setIsLoading] = useState(null)

    const fetchMovies = async () => {
        try {
            // eslint-disable-next-line no-unused-vars
            const {page, results, total_pages, total_results} = await moviesService.getMovies();
            return results;
        } catch (e) {
            console.error(e)
        }
    }

    const fetchGenres = async () => {
        try {
            const {genres} = await genresService.getGenres();
            return genres
        } catch (e) {
            console.error(e)
        }
    }

    const fetchMoviesData = async () => {
        const request = [fetchMovies(), fetchGenres()];

        try {
            setIsLoading(true);

            const [movies, genres] = await Promise.all(request);

            const mergedWithGenresMovies = movies.map((movie) => {
                const {genre_ids} = movie;
                const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId));
                return {...movie, movieGenresList};
            })

            setMoviesList(mergedWithGenresMovies);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMoviesData();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const renderLoadingIndicator = () => (
        <div className={styles.loading}>Loading...</div>
    )
    return (
        <div className={styles.homeBody}>
            {
                isLoading || isLoading === null ? renderLoadingIndicator() : <MoviesList movies={moviesList}/>
            }

        </div>

    )
}
