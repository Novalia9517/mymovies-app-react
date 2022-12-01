import FavoriteButton from './FavoriteBtn'

const DetailCard = ({movie, handleClick}) => {
    let runtimeHour = Math.floor(movie?.runtime / 60),
    runtimeMinutes = movie?.runtime - (runtimeHour * 60)
    let runtime = `${runtimeHour}h ${runtimeMinutes}m`

    return (
      <div className='text-gray-800 h-auto max-w-full dark:text-gray-200'>
        <div className={`hero h-full  glass p-1 md:p-10 max-w-full`}>
            <div className="hero-content flex-col lg:flex-row relative">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="sm:max-w-sm rounded-lg shadow-2xl" />
                <div className='mx-10 w-[60vw] h-full flex flex-col justify-evenly'>
                <h1 className="text-4xl font-bold" style={{textShadow:'2px 2px 3px black'}}>{movie.title}</h1>
                <p className="py-6 italic font-bold">{movie.tagline}</p>
                <div>
                    <div>
                    { movie.genres &&
                        movie.genres.map((genre,index) => {
                            return(
                                <span className="badge badge-outline badge-primary dark:badge-outline dark:badge-info mx-2 font-bold" key={genre.id}>{genre.name}</span>
                                )
                        })
                    }             
                    </div>
                <h2 className='text-2xl font-bold text-primary dark:text-gray-200 my-5' style={{textShadow:'2px 2px 3px black'}}> {movie.release_date}</h2>
                
                {/* <p>{movie.backdrop_path}</p> */}
                <h2 className='text-gray-800 font-bold my-5 text-primary dark:text-gray-200 text-xl'>Companies : </h2>
                <ul className='flex justify-evenly flex-wrap my-8'>
                    { movie.production_companies &&
                        movie.production_companies.map((companie) => {
                        return (
                            <div className='flex justify-center px-3  flex-col'>
                                { companie.logo_path ?
                                    <img 
                                        className='h-6'
                                        src={`https://image.tmdb.org/t/p/w500/${companie.logo_path}`}
                                        alt={companie.name}
                                        />
                                    : <p className='text-gray-400 h-6'>Logo</p>
                                }
                                <p className='font-bold text-sm my-3 text-primary dark:text-sky-400'>{companie.name}</p>
                            </div>
                        )
                        })                       
                        
                    }
                </ul>
                <div className='flex justify-evenly flex-wrap'>
                        <FavoriteButton string={true} movie_id={movie}/>
                        <button className="btn btn-outline btn-primary dark:btn-outline dark:btn-info" htmlFor="my-modal-3" onClick={handleClick}>See Trailer</button>
                    </div>
                <div className="stats glass shadow flex -justify-center my-7 mb-0">
                <div className="stat">
                    <div className="stat-title text-black font-bold">Vote Average</div>
                    <div className="radial-progress text-secondary dark:text-sky-800 text-lg" style={{"--value":movie.vote_average * 10, "--size": "4rem", "--thickness": "3px"}}>{Math.floor(movie.vote_average * 10)}%</div>
                </div>
                
                <div className="stat">
                    <div className="stat-title text-black text-black">Budget</div>
                    <div className='stat-value text-secondary dark:text-sky-800 text-xl'>$ {Number(movie.budget).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</div>
                </div>
                
                <div className="stat">
                    <div className="stat-title text-black font-bold">Popularity</div>
                    <div className="stat-value text-secondary dark:text-sky-800 text-xl">{movie.popularity}</div>
                </div>
                <div className="stat text-black">
                    <div className="stat-title font-bold">Runtime</div>
                    <div className="stat-value text-secondary dark:text-sky-800 text-xl">{runtime}</div>
                </div>
                
                </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    )
  }

  export default DetailCard
