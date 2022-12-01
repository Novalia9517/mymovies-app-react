import FavoriteButton from "./FavoriteBtn"

const UpcomingMovies = ({ upcoming, detailClick }) => {
        return (
            <div className='flex flex-col h-full w-full bg-gray-300 dark:bg-gray-700 px-10 mb-5' id="favorite">
            <h1 className='text-center p-5 text-indigo-400 font-bold text-3xl italic' style={{textShadow:'2px 2px 3px black'}}>Upcoming Movies</h1>
            <div className="divider"></div> 
            <div className='flex justify-between h-[60vh] overflow-x-scroll p-10'>
            {upcoming &&
                upcoming.map((item, index) => {
                    let url = `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    return(
                        <div className="card bg-base-100 shadow-xl image-full basis-1/1 min-w-[200px] lg:basis-1/7 mx-2 my-4 shadow-xl text-gray-600 hover:scale-110" key={index}>
                            <figure className='h-80'><img className="object-fill h-auto w-full"src={url} alt={item.title}/></figure>
                            <div className="card-body text-gray-200">
                                <h2 className="card-title dark:text-gray-100" style={{textShadow:'2px 2px 2px black'}}>{item.title}</h2>
                                <p className="dark:text-gray-100">{item.release_date}</p>
                                <div className="card-actions justify-between">
                                {/* <button className="btn btn-sm btn-outline btn-primary mt-5 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-800">Watch</button> */}
                                {/* <div  className="flex">
                                <button className="btn btn-sm btn-outline btn-primary mt-5  dark:btn-outline dark:btn-info"
                                    onClick={() => {detailClick(item.id)}}
                                >Detail</button>
                                <FavoriteButton string={false} movie_id={item}/>
                                </div> */}
                                 <div className="dropdown dropdown-top">
                                    <label tabIndex={0} className="btn m-1 bg-white dark:bg-gray-700 text-indigo-700">Click</label>
                                    <ul tabIndex={0} className="dropdown-content menu p-1 shadow rounded w-full  bg-white dark:bg-gray-700">
                                        <li><FavoriteButton string={false} movie_id={item}/></li>
                                        <li><button className="btn btn-sm btn-outline btn-primary mt-5  dark:btn-outline dark:btn-info"
                                    onClick={() => {detailClick(item.id)}}
                                >Detail</button></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
          </div>
        )
    }

export default UpcomingMovies
