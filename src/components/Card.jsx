import React from 'react'

function Card({post}) {
  return (
    <div className='flex flex-col justify-center bg-zinc-100 p-4 rounded-md mb-2 shadow-md shadow-gray-600 hover:shadow-lg'>
        <h1 className='font-bold'>{post.title}</h1>
        <p className=''>By <span className='italic'>{post.author}</span> on <span className='font-bold underline'>{post.category}</span></p>
        <p className='opacity-75 mb-8 text-sm'>Posted on {post.date}</p>
        <p className='text-sm leading-tight mb-2'>{post.content}</p>
        <div className='mb-6'>
        {
            post.tags.map((tag, index)=>{
                return <span 
                className='text-sm ml-2 mr-2 text-blue-800 underline'
                key={index}>{`#${tag}`}</span>
            })
        }
        </div>

    </div>
  )
}

export default Card