import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
})
const key = 'AIzaSyBzpWkUhQqhsCQZUsPxdl6mPStUS2mqUXk';

class YoutubeService {
    async getVideoByName(videoName) {
        const {data} = await AXIOS.get(`?part=snippet&key=${key}&type=video&q=${videoName} Official Trailer`)
        return data
    }

}

export const youtubeService = new YoutubeService()
