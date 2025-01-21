import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card';
import Spinner from './Spinner';

function Blogs() {

  const {posts, loading}=useContext(AppContext);
  

  return (
    <div>
        {
            loading ? (<Spinner/>):
            (
                posts.length===0 ? (
                    <div>
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