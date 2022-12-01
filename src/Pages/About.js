import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'

const About = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white dark:bg-gray-700 w-full h-[100vh] flex flex-col justify-between'>
       <Navbar
           home={() => navigate("/")}
           favorite={() => navigate("/favorite")}
           about={() => navigate("/about")}
           contact={() => navigate("/contact")}
        />
      <div className='w-full h-auto grid place-items-center'>
        <div className="card card-side h-auto max-w-[500px]">
          <div className="card-body bg-white text-gray-800 dark:bg-gray-600 rounded-xl shadow-xl dark:text-gray-200">
            <h2 className="card-title">About MyMovie App</h2>
            <p>This App was build built for assignment from bootcamp for <span className='text-primary dark:text-sky-500 font-bold'>Reactjs</span> implementation and fetching Api with <span className='text-primary dark:text-sky-500 font-bold'>Axios</span>. And also to learn to apply the css framework in the project, namely <span className='text-primary dark:text-sky-500 font-bold'>Tailwindcss</span> with the <span className='text-primary dark:text-sky-500 font-bold'>Daisyui plugin</span>. The data is taken from the Public API, namely the <span className='text-primary dark:text-sky-500 font-bold'>Moviedb API</span></p>
            <div className="card-actions justify-end">
              <button 
                onClick={() => navigate('/contact')}
                className="btn btn-primary dark:bg-sky-500">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default About