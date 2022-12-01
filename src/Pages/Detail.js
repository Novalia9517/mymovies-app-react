import api from '../Services/api';
import Navbar from '../Components/Navbar';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DetailCard from '../Components/DetailCard';
import UpcomingMovies from '../Components/UpcomingMovies';
import TrendingMovies from '../Components/TrendingMovies';
import DetailInfo from '../Components/DetailInfo';
import Loading from '../Components/Loading';
import Footer from '../Components/Footer';

const Detail = () => {
    const [movieDetail,setMovieDetail] = useState()
    const [trendingMovies, setTrendingMovies] = useState()
    const [upcomingMovies,setUpcomingMovies] = useState()
    const [videoUrl,setVideoUrl] = useState()
    const [showTrailer,setShowTrailer] = useState('hidden')
    const navigate = useNavigate(), location = useLocation()


    const getVideo = async(id) =>{
      let url = ''
      await api.getVideo(id)
        .then(response =>{
          setMovieDetail(response.data)
          let allVideos = response.data.videos.results
          allVideos.map(item => {
            if(item.name === 'Official Teaser'){
              url = item.key
            }else if(item.name === 'Official Teaser'){
              url = item.key
            }else{
              url = allVideos[0].key
            }
          })
        })
        .catch(err => console.log(err))
        setVideoUrl(`https://www.youtube.com/embed/${url}`)
    }
    const getUpcomingMovies = async() =>{
      try {
        let result = await api.upcomingMovies('upcoming')
        setUpcomingMovies(result.data.results)
      } catch (error) {
        console.error(error)
      }
    }
    const seeTrailer = () =>{
      setShowTrailer('block z-10')
    }
    const hiddenTrailer = () =>{
      setShowTrailer('hidden')
    }
    const getTrendingMovies = async() => {
      try {
        let result = await api.getTrending()
        setTrendingMovies(result.data.results)
      } catch (error) {
        console.error(error)
      }
    }
    useEffect(()=>{
        getVideo(location?.state?.id)
        getUpcomingMovies()
        getTrendingMovies()
    },[])

    return (
      <div className='bg-white w-full h-full flex flex-col'>
        <Navbar
           home={() => navigate("/")}
           favorite={() => navigate("/favorite")}
           about={() => navigate("/about")}
           contact={() => navigate("/contact")}
        />
          {
            movieDetail ?
            <>
              <div className={`w-full h-full flex justify-center bg-indigo-300 dark:bg-gray-700 shadow-xl relative p-5`}>
                <DetailCard movie={movieDetail} handleClick={() => seeTrailer()}/>
                <div 
                  className={`absolute w-full h-full glass ${showTrailer} flex justify-center items-center`}>
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2"
                    onClick={() => hiddenTrailer()}>✕</label>
                  <iframe src={videoUrl} className={`w-[60vw] h-[70vh] border border-3xl border-indigo-800 shadow-xl`}
                    scrolling="no" autoPlay title="trailer"
                    allow="autoplay; fullscreen;encrypted-media;"
                  ></iframe>
                </div>
              </div>
              <DetailInfo movie={movieDetail}/>
            </>
            : <Loading/>
          }
        {/* <Reviews review={reviews}/> */}
        {
          trendingMovies &&
          <TrendingMovies trending={trendingMovies}
          detailClick={(movie_id) => {
            navigate(('/detail'),{
            state : {
                id : movie_id
              }
          } )
          // window.location.reload(false)
          getVideo(movie_id)
            }}
          />
        }
        {
          upcomingMovies &&
          <UpcomingMovies upcoming={upcomingMovies}
            detailClick={(movie_id) => {
              navigate(('/detail'),{
              state : {
                  id : movie_id
                }
            } )
            // window.location.reload(false)
            getVideo(movie_id)
          }}
          />
        }
        <Footer/>
      </div>
    )
  }

export default Detail
