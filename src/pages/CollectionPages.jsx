import React from 'react'
import CollectionCard from '../components/CollectionCard'
import { useDispatch, useSelector } from 'react-redux'
import { clearCollection } from '../redux/features/CollectionSlice'


const CollectionPages = () => {
      
  const collection = useSelector(state => state.collection.items)

  const dispatch = useDispatch()

  const clearAll = ()=>{
    dispatch(clearCollection())
  }

  return (
   <div className='overflow-auto px-5 py-5'>
      {collection.length>0? <div className='flex justify-between mb-6'>
      <h2 className="text-2xl font-semibold text-white">Your Collection</h2>
      <button 
      onClick={()=>{
    clearAll()
      }}
      className= ' bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-base font-medium rounded-lg cursor-pointer active:scale-95 transition-all'>Clear Collection</button>
    </div>: <h2 className="text-3xl py-16 text-slate-400 text-center font-medium">Collection is Empty</h2>}
   
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ' >
       {collection.map((item,idx)=>{
     return <div key={idx}>
        <CollectionCard item={item}/>
        </div>
       })}
      
    </div>
   </div>
  )
}

export default CollectionPages
