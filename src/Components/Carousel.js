import { useDispatch } from "react-redux"
import { addFavorite } from "../features/Slice"
import FavoriteButton from "./FavoriteBtn"

const Carousel = ({ movie,index,genrelist,detailClick, keys }) => {
      let url = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      const dispatch = useDispatch()
    //   console.log(movie.id)
        return (
            <div id={index} key={keys} className="carousel-item glass relative w-full h-full">
                <div className="hero h-full text-white">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={url} className="max-w-sm rounded-lg shadow-2xl" alt="gambar"/>
                        <div className='px-10'>
                        <h1 className="text-5xl font-bold text-indigo-300" style={{textShadow:'2px 2px 3px black'}}>Now Playing!</h1>
                        <h1 className="text-5xl font-bold" style={{textShadow:'2px 2px 3px black'}}>{movie.title}</h1>
                        <p className="py-6">{movie.release_date}</p>
                        <div>
                            {movie?.genre_ids && 
                                movie.genre_ids.map(id => {
                                    let genre = genrelist?.map(i => i.id === id ? i.name : '' )
                                    return <div className="badge badge-outline mx-2">{genre}</div>
                                })
                            }          
                        </div>
                        <p className="py-6">{movie.overview}</p>
                        {/* <button className="btn btn-primary mx-5">Watch Now</button> */}
                        <div className="flex justify-evenly">
                            <FavoriteButton string={true} movie_id={movie} />
                            <button className="btn btn-primary dark:btn-info" onClick={() => detailClick(movie.id)}>See Detail</button>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#${index-1}`} className="btn btn-circle">«</a> 
                        <a href={`#${index+1}`} className="btn btn-circle">»</a>
                    </div>
                </div>
            </div>
        )
    }

export default Carousel
