import React from 'react'

function Card({post}) {
  return (
    <div>
        <h1 className='font-bold'>{post.title}</h1>
        <p>By {post.author} on {post.category}</p>
        <p>Posted on {post.date}</p>
        <p>{post.content}</p>

        {
            post.tags.map((tag, index)=>{
                return <span key={index}>{`#${tag}`}</span>
            })
        }

    </div>
  )
}

export default Card