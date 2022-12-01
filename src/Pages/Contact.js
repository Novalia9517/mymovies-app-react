import React,{ useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate} from 'react-router-dom'
import Footer from '../Components/Footer'

const Contact = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div className='bg-white dark:bg-gray-700 w-full h-screen flex flex-col'>
       <Navbar
           home={() => navigate("/")}
           favorite={() => navigate("/favorite")}
           about={() => navigate("/about")}
           contact={() => navigate("/contact")}
        />
      <div className='h-full grid place-items-center'>
        <div className='card shadow-lg bg-indigo-400 p-2 md:p-10 w-[80vw] md:w-[40vw]'>
          <form onSubmit={() => onSubmit()} className='grid place-items-center my-3'>
            <input type="text" placeholder="Your fullname"
              className="input input-bordered input-primary w-full max-w-xs bg-white text-indigo-500 caret-indigo-700"
              onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Your Email" 
              className="input input-bordered input-primary w-full max-w-xs bg-white my-3 text-indigo-500 caret-indigo-700"
              onChange={(e) => setEmail(e.target.value)}/>
            <textarea placeholder="Your Message"
              className="input input-bordered input-primary w-full max-w-xs bg-white resize-none p-3 h-56 text-indigo-500 caret-indigo-700"
              onChange={(e) => setMessage(e.target.value)}/>
            <button className="btn btn-outline btn-primary my-3 w-48" type='submit'>Send Message</button>
          </form>

        </div>
      </div>
      <Footer/>
    </div>
  )
}


export default Contact
