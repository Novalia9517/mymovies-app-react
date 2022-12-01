import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import { useSelector } from 'react-redux'
import FavoriteMovies from '../Components/FavoriteMovies'

const Favorites= () => {
  const navigate = useNavigate()
  const favoriteMovies = useSelector(state => state.favorites)
  console.log(favoriteMovies)
  return (
    <div className='bg-white dark:bg-gray-700 w-full min-h-screen h-full flex flex-col justify-between'>
        <Navbar
           home={() => navigate("/")}
           favorite={() => navigate("/favorite")}
           about={() => navigate("/about")}
           contact={() => navigate("/contact")}
        />
        <div className='w-full min-h-screen h-full p-10'>
          <h2 className='font-bold text-3xl text-indigo-400 mb-3' style={{textShadow:'2px 2px 3px gray'}}>Your Favorites Movies</h2>
          {favoriteMovies ?
            favoriteMovies.map((movie) => {
              console.log(typeof movie)
              return(
               <FavoriteMovies movie={movie}/>
              )
            })
            : <>No Favorite Movies Yet</>
          }
        </div>
        <Footer/>
      </div>
  )
}

export default Favorites
