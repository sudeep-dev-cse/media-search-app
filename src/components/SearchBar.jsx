import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text,setText] = useState('')

    const disptach = useDispatch()
   

    const submitHandler = (e)=>{
        e.preventDefault()

       disptach(setQuery(text))
        setText('')
    }

  return (
    <div>
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex  gap-5 p-10 '>

        <input
        value={text}
        onChange={(e)=>{
            setText(e.target.value)
        }}
         type ="text"  placeholder='Search Anything..'
        className='w-full bg-slate-800 text-white border border-slate-700 px-4 py-3 text-lg rounded-lg outline-none focus:border-cyan-500'
        />
        <button 
        className='bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium active:scale-95 transition '
        >Search</button>
      </form>
    </div>
  )
}

export default SearchBar
