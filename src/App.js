import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Project from './Pages/Project';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Detail from './Pages/Detail';
import { Provider } from 'react-redux';
import Store from './Store';
import Favorites from './Pages/Favorite';
// import { ToggleProvider } from './Context/Context';


export default function App(){
  return (
    <Provider store={Store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/favorite' element={<Favorites/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

// export default function App() {
//   return (
//     <ToggleProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/project' element={<Project/>}/>
//           <Route path='/contact' element={<Contact/>}/>
//           <Route path='/detail' element={<Detail/>}/>
//         </Routes>
//       </BrowserRouter>
//     </ToggleProvider>
//   )
// }
