import { useState, useEffect } from 'react';
import api from '../Services/api';
import { useNavigate } from 'react-router-dom';
import Navbar  from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import UpcomingMovies from '../Components/UpcomingMovies'
import Loading from '../Components/Loading';
import TrendingMovies from '../Components/TrendingMovies';
import Footer from '../Components/Footer';

const Home = () => {
  const [playingMovies, setPlayingMovies] = useState()
  const [upcomingMovies, setUpcomingMovies] = useState()
  const [trendingMovies, setTrendingMovies] = useState()
  const [genreList, setGenreList] = useState()
  const navigate = useNavigate()

  const getPlayingMovies = async() =>{
    try {
      let result = await api.nowPlaying('now_playing')
      setPlayingMovies(result.data.results)
    } catch (error) {
      console.error(error)
    }
  }
  const getUpcomingMovies = async() =>{
    try {
      let result = await api.upcomingMovies('upcoming')
      setUpcomingMovies(result.data.results)
    } catch (error) {
      console.error(error)
    }
  }
  const getALLgenre = async() =>{
    try {
      let result = await api.genreList()
      setGenreList(result.data.genres)
    } catch (error) {
      console.error(error)
    }
  }
  const getTrendingMovies = async() => {
    try {
      let result = await api.getTrending()
      setTrendingMovies(result.data.results)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getPlayingMovies()
    getUpcomingMovies()
    getALLgenre()
    getTrendingMovies()
  },[])
  
  return (
      <div className='w-[100vw] selection:bg-purple-400 selection:text-purple-900 bg-white dark:bg-gray-700'>
        <Navbar
           home={() => navigate("/")}
           favorite={() => navigate("/favorite")}
           about={() => navigate("/about")}
           contact={() => navigate("/contact")}
        />
        <div className="carousel w-full h-full bg-indigo-500 dark:bg-gray-700" id='playing'>
                {playingMovies ?
                    playingMovies.map((item, index) => {
                       return(
                        <Carousel
                          movie={item} index={index} genrelist={genreList} keys={index}
                          detailClick={(movie_id) => navigate(('/detail'),{
                            state : {
                                id : movie_id
                              }
                          } )}
                          />
                       )
                    })
                  : <Loading/>
                  }
        </div>
        {
          trendingMovies &&
          <TrendingMovies trending={trendingMovies}
            detailClick={(movie_id) => navigate(('/detail'),{
              state : {
                  id : movie_id
                }
            } )}
          />
        }
        {
          upcomingMovies &&
          <UpcomingMovies upcoming={upcomingMovies}
            detailClick={(movie_id) => navigate(('/detail'),{
              state : {
                  id : movie_id
                }
            } )}
          />
        }

        <Footer/>
    </div>
    )
}

export default Home


// import React, { Component } from 'react';
// import FavoriteMovies from '../Components/FavoriteMovies';
// import Navbar from '../Components/Navbar';
// import PlayingMovie from '../Components/PlayingMovie';
// import './App.css';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       movies : [],
//       favorite : []
//     }

//     this.getMovies = this.getMovies.bind(this)
//   }

//   getMovies(){
//     let AllMovies = [
//       {
//         title : '20th Century Girl',
//         image : 'http://38.242.147.83/wp-content/uploads/2022/10/qhWPZdEEyht9Vqpj0vl3FB6CSr0.jpg',
//         favorite : false,
//         year : '2022',
//         description : 'Film Korea 20th Century Girl mengisahkan tentang seorang remaja yang tinggal pada tahun 1999. Ia adalah seorang wanita dengan semangat yang tinggi. Bo Ra adalah siswa SMA berusia 17 tahun.'
//       },
//       {
//         title : '2037',
//         image : 'http://38.242.147.83/wp-content/uploads/2022/07/mahoRwcpJRx8TAuE6lKrYqCv8io.jpg',
//         favorite : true,
//         year : '2022',
//         description : 'Yoon Young yang berusia 19 tahun tinggal sendirian dengan ibunya dan mempersiapkan diri untuk ujian pegawai negeri sambil bekerja paruh waktu.'
//       },
//       {
//         title : 'Alienoid',
//         image : 'http://38.242.147.83/wp-content/uploads/2022/08/qHXTUUJ3Rsxw67Ns75u6RdGNaMJ.jpg',
//         favorite : false,
//         year : '2022',
//         description : 'Di Bumi saat ini, Penjaga (Kim Woo-bin) yang bertanggung jawab mengelola tahanan alien yang terkurung di otak manusia, menangkap pelanggar penjara dengan rekan robotnya, Thunder.'
//       },
//       {
//         title : 'The Swordsman',
//         image : 'https://thumbor.prod.vidiocdn.com/gbm-KRsfVWisiUOHhl800otghOA=/filters:quality(70)/vidio-web-prod-film/uploads/film/image_portrait/2329/the-swordsman-e18d11.jpg',
//         favorite : false,
//         year : '2022',
//         description : 'The Swordsman mengambil latar di jaman Joseon dimana seorang pendekar pedang bernama Tae Yul memilih untuk pergi dan hidup damai di pegunungan setelah terjadi kudeta untuk menggulingkan raja.'
//       },
//       {
//         title : 'Peninsula',
//         image : 'https://www.episodi.fi/wp-content/uploads/2020/08/peninsula-juliste.jpg',
//         favorite : false,
//         year : '2020',
//         description : 'Peninsula / Train to Busan 2 berlatar waktu empat tahun setelah tragedi di film pertama, Train to Busan. Pertarungan manusia melawan gerombolan zombie terus berlanjut, khususnya bagi mereka yang selamat di dalam reruntuhan kota.'
//       },
//       {
//         title : 'Mulan',
//         image : 'https://upload.wikimedia.org/wikipedia/id/8/8a/Mulan_2020_film_poster_on_Disney%2B.jpg',
//         favorite : false,
//         year : '2020',
//         description : 'Ketika Kaisar Tiongkok mengeluarkan keputusan bahwa satu orang per keluarga harus bertugas di Tentara Kekaisaran Tiongkok untuk mempertahankan negara dari Hun, Hua Mulan, putri tertua dari seorang pejuang yang terhormat, masuk menggantikan ayahnya yang sakit.'
//       },
//       {
//         title : 'Kim Ji-young, Born 1982',
//         image : 'https://image.tmdb.org/t/p/w500/gA4J1jio3O5monA9GrAnxjlcvqw.jpg',
//         favorite : true,
//         year : '2019',
//         description : 'Film Kim Ji-young, Born 1982 ini secara keseluruhan menceritakan Kim Ji-Young yang diperankan oleh Jung Yu-mi adalah seorang wanita biasa yang mulanya bekerja di agensi kehumasan.'
//       },
//       {
//         title : 'The Witch: Part 2',
//         image : 'http://38.242.147.83/wp-content/uploads/2022/07/9YTuscJXmr9Iua62amCgGSU8PDW.jpg',
//         favorite : true,
//         year : '2022',
//         description : 'Seorang gadis terbangun di laboratorium rahasia besar. kemudian secara tidak sengaja bertemu gadis lain yang berusaha melindungi rumahnya dari geng.'
//       },
//     ]

//     let favoriteMovies = AllMovies.filter(item => item.favorite === true)
//     this.setState({
//       movies : AllMovies,
//       favorite : favoriteMovies
//     })
//   }
//   componentDidMount(){
//     this.getMovies()
//   }

//   render(){
//     return (
//       <div className='w-full bg-gray-300 selection:bg-purple-400 selection:text-purple-900'>
//        <Navbar/>
//        <PlayingMovie movies={this.state.movies}/>
//        <FavoriteMovies movies={this.state.favorite}/>
//       </div>
//     );
//   }
// }

// export default App;
