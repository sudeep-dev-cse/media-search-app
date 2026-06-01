import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
const tabs =['photos','videos','gif'] 

 const dispatch = useDispatch()
 const  activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-4 px-10 py-4'>
        {tabs.map(function(elem,idx){
           return (
           <button className={`${(activeTab==elem?'bg-cyan-500':'bg-slate-700') } 
             px-5 py-2 rounded-lg uppercase
             text-white font-medium
            cursor-pointer active:scale-95
            transition-all duration-200`}
             key ={idx}
             onClick={()=>{
                dispatch(setActiveTabs(elem))
             }}
           >
             {elem}</button>
        )

        })}
      
    </div>
  )
}

export default Tabs
