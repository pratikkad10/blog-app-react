import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {
  const {totalPages, page, handlePageChange}=useContext(AppContext);
  return (
    <div className='flex items-center justify-center gap-6 bg-zinc-200 p-2 rounded-md '>
        {
          page > 1 &&  
          <button 
          className='px-2 py-1 bg-zinc-400 rounded-md  hover:bg-zinc-300'
          onClick={()=>handlePageChange(page-1)}>Previous</button>
        }
        
        {
            page < totalPages &&
            <button 
            className='px-2 py-1 bg-zinc-400 rounded-md hover:bg-zinc-300'
            onClick={()=>handlePageChange(page+1)}>Next</button>
        }

        <p className='font-semibold'>Pages {page} of {totalPages}</p>
    </div>
  )
}

export default Pagination