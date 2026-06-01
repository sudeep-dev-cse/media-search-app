import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div  className='flex justify-between items-center py-6 px-10 bg-slate-900 border-b border-slate-800'>
    <Link to='/' className='text-2xl font-bold text-white'>Media Search</Link>

    <div className='flex gap-4 items-center'> 
        <Link className='bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition' to='/' >Search</Link>
          <Link className='bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg font-medium transition' to='/collection' >Collection</Link>
    </div>
  </div>
      
    </div>
  )
}

export default Navbar
