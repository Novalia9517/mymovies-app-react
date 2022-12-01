import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavorite } from '../features/Slice'

const FavoriteMovies = ({movie}) => {
    const dispatch = useDispatch()
    const favoriteMovies = useSelector(state => state.favorites)
  return (
    <div tabIndex={0} className="collapse collapse-plus w-fullborder border-base-300 bg-white dark:bg-gray-800 rounded-box shadow-xl text-primary dark:text-info">
        <div className="collapse-title text-xl font-medium h-auto">
            {movie.title || movie.name}
        </div>
        <div className="collapse-content"> 
        <div className="hero h-[25vh] bg-white dark:bg-gray-800 py-2 overflow-scroll">
            <div className="hero-content flex-col lg:flex-row">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="w-[10vw] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold">{movie.title || movie.name}</h1>
                    <p>{movie.release_date}</p>
                    <p className="py-3">{movie.overview}</p>
                   
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FavoriteMovies
