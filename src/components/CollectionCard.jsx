import React from 'react'
import { removeCollection } from '../redux/features/CollectionSlice'
import { useDispatch } from 'react-redux'
import {  toast ,Zoom} from 'react-toastify';

const CollectionCard = ({item}) => {

  const dispatch = useDispatch()

   const handleRemoveCollection = (item)=>{
    dispatch(removeCollection(item.id)) 
 
  toast.error('Removed From Collection❌', {
     position: "top-right",
      autoClose: 2000,
     hideProgressBar: false,
     closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
     transition: Zoom,
    });
}
 
  return (
    <div className='w-[22vw] h-80 relative bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300'>
      
       <a target='_blank'  rel='noopener noreferrer' className='block h-full' href={item.url}>
                 {item.type=='photo'?<img className='h-full w-full object-cover object-center hover:scale-110 transition-transform duration-500' src={item.src} alt="" />:''}
                 {item.type=='video'?<video className='h-full w-full object-cover object-center hover:scale-110 transition-transform duration-500' autoPlay loop muted src={item.src} />:''}
                  {item.type=='gif'?<img className='h-full w-full object-cover object-center hover:scale-110 transition-transform duration-500' src={item.src} alt="" />:''}
              </a>
       <div id='bottom' className='flex justify-between gap-3 items-center w-full py-6 px-4 text-white absolute bottom-0 bg-black/60 backdrop-blur-sm'>
        <h2 className='text-base font-bold text-white line-clamp-2 '>{item.title}</h2>
        <button
        onClick={()=>{
         handleRemoveCollection(item)
        }}
        className='bg-red-500 hover:bg-red-600 active:scale-95 text-white rounded-lg px-4 py-2 font-medium cursor-pointer transition-all duration-200'>Remove</button>
       </div>
    </div>
  )
}

export default CollectionCard
