import React from "react";
import {MoviesList} from "../components";
import {moviesService} from "../services";
import {useState, useEffect, useReducer, useMemo, useCallback, memo} from 'react'


export const Home = () => {
    const [moviesList, setMoviesList] = useState([])

    const fetchMovies = async () => {
        const {page, results, total_pages, total_results} = await moviesService.getMovies()
        setMoviesList(results)
    }

    useEffect(() => {
        fetchMovies().then(r => r)
    }, [])


    return (
        <MoviesList items={moviesList}/>
    )
}
