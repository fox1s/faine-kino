import {AXIOS} from './axiosConfig'
class MoviesService {
    async getMovies() {
        const {data} = await AXIOS.get('discover/movie')
        return data
    }

    async getMovieDetailsById(movieId) {
        const {data} = await AXIOS.get(`/movie/${movieId}`)
        return data
    }
}

export const moviesService = new MoviesService() /* сінгл тон (патерн який говорить, що якшо є клас і цей клас є сінгл
тоном, то цей клас може проінстенціюватися лише 1 раз. Тобто ми можемо створити лише один об'єкт на основі цього класу і
всі інші споживачі цього об'єтку будуть звертатися до одного і того самого обєкту. Їм не треба в кожному місці робити
new movieService. Вони будуть просто завжди усі звертатися до одного і того самого об'єкту, бо чисто по нашій логіці
мати 2 ось таких сервіси немає сенсу). Експортуємо об'єкт створений на основі класу*/
