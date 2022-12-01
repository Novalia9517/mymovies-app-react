import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, deleteFavorite } from '../features/Slice'

const FavoriteButton = ({string,movie_id, add}) => {
    let dispatch = useDispatch()
    const favoriteMovies = useSelector(state => state.favorites)
    let active = favoriteMovies.filter(item => item.id === movie_id.id)
    active = active !== undefined 
     const addButton = () => {
        dispatch(addFavorite({ movieId : movie_id}))
        console.log(movie_id)
    }
    const deleteButton = () => {
        dispatch(deleteFavorite({movieId : movie_id.id}))
        console.log(movie_id)
    }
    return (
        <div className='w-auto h-fullz flex item-center btn btn-outline btn-primary dark:btn-outline dark:btn-info text-primary dark:text-info'>
            <label className="swap swap-flip text-9xl">
                <input type="checkbox" />   
                <div className='swap-on' onClick={() => deleteButton()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${active ? `fill-primary dark:fill-info` : `stroke-primary dark:stroke-info`}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <div className='swap-off' onClick={() => addButton()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-primary dark:stroke-info" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
            </label>
            <span className=''>{string ? 'Favorite' : ''}</span>
        </div>
    )
}

export default FavoriteButton
