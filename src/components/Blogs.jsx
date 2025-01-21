import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card';
import Spinner from './Spinner';

function Blogs() {

  const {posts, loading}=useContext(AppContext);
  

  return (
    <div className=' w-1/2 mx-auto rounded-md p-4 shadow-gray-600 shadow-lg my-6'>
        {
            loading ? (<Spinner/>):
            (
                posts.length===0 ? (
                    <div className='text-2xl text-center font-semibold text-zinc-800'>
                        <h1>No post found</h1>
                    </div>
                ) : 
                (
                    posts.map((post)=>{
                        return <Card key={post.id} post={post}/>
                    })
                )
            )
        }
    </div>
  )
}

export default Blogs