import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'

const Project = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white dark:bg-gray-700 w-full h-[100vh] flex flex-col'>
        <Navbar
           home={() => navigate("/")}
           favorite={() => navigate("/favorite")}
           about={() => navigate("/about")}
           contact={() => navigate("/contact")}
        />
        <div className='w-full h-full'>

        </div>
        <Footer/>
      </div>
  )
}

export default Project
