import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {
  const {totalPages, page, handlePageChange}=useContext(AppContext);
  return (
    <div>
        {
          page > 1 &&  
          <button onClick={()=>handlePageChange(page-1)}>Previous</button>
        }
        
        {
            page < totalPages &&
            <button onClick={()=>handlePageChange(page+1)}>Next</button>
        }

        <p>Pages {page} of {totalPages}</p>
    </div>
  )
}

export default Pagination