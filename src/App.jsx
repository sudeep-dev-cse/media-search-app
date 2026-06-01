import React from 'react'
import { fetchGif, fetchPhotos, fetchVideos } from './api/mediaApi'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import CollectionPages from './pages/collectionPages'

const App = () => {

  
  return (
    <div className='min-h-screen text-white w-full bg-slate-950'>

      <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/collection' element={<CollectionPages/>} />
      </Routes>  
    
<ToastContainer />

     
      
     
   

    </div>
  )
}

export default App
