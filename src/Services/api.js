import axios from 'axios'

const instance = axios.create({
    baseURL : `https://api.themoviedb.org/3/`
})

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    nowPlaying:(keyword) =>
    instance({
        method : `GET`,
        url : `movie/${keyword}?api_key=1f9c774f5dc32a434e4a1f092839fff0&language=en-US`
    }),
    upcomingMovies:(keyword) =>
    instance({
        method : `GET`,
        url : `movie/${keyword}?api_key=1f9c774f5dc32a434e4a1f092839fff0&language=en-US`
    }),
    genreList:() =>
    instance({
        method : `GET`,
        url : `genre/movie/list?api_key=1f9c774f5dc32a434e4a1f092839fff0&language=en-US`
    }),
    getDetail:(id) =>
    instance({
        method : 'GET',
        url : `movie/${id}?api_key=1f9c774f5dc32a434e4a1f092839fff0&language=en-US`
    }),
    getVideo:(id) =>
    instance({
        method : 'GET',
        url : `movie/${id}?api_key=1f9c774f5dc32a434e4a1f092839fff0&append_to_response=videos`
    }),
    getReview:(id) =>
    instance({
        method : 'GET',
        url : `movie/${id}/reviews?api_key=1f9c774f5dc32a434e4a1f092839fff0&language=en-US&page=1`
    }),
    getTrending:() =>
    instance({
        method: 'GET',
        url :`trending/all/day?api_key=1f9c774f5dc32a434e4a1f092839fff0`
    })
}