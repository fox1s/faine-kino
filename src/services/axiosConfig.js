// створений щоб розірвати циркулярну залежність index-MoviesService
import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmY3M2M2M2I2NWYwNGExZWIwZjU3ZTEwNDg4NjhmNiIsInN1YiI6IjYwNTlmYTgwYTZjMTA0MDAzZGM0ZjNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeT4K2_BTxHFdaKGiLvqJydfdN5461Kx6skxNy6O-lM'
    }
})
