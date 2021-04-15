import React, {useEffect, useState} from "react";
import {MoviesList} from "../components";
import {moviesService} from "../services";
import styles from './Home.module.css'

export const Home = () => {
    const [moviesList, setMoviesList] = useState([])
    const [isLoading, setIsLoading] = useState(null)

    const fetchMovies = async () => {
        try {
            setIsLoading(true)
            // eslint-disable-next-line no-unused-vars
            const {page, results, total_pages, total_results} = await moviesService.getMovies()
            setMoviesList(results)
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies().then(r => r)
    }, [])

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
