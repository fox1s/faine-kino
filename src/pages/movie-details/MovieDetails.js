import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {moviesService} from "../../services";

export default function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState([]);

    const {id} = useParams();

    const getMovieDetails = async () => {
        const data = await moviesService.getMovieDetailsById(id);
        console.log(data)
        setMovieDetails(data);
    }

    useEffect(() => {
        getMovieDetails().then(r => r);
    }, []);

    return (
        <div>
            fsdfs
        </div>
    );
}
