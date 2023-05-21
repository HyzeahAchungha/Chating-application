import React from 'react'
import "./Posts.css"
import Post from '../Post/Post'
import postsData from '../../Data/PostsData'




const Posts = () => {
  return (
    <div className='Posts'>

        {postsData.map((post,id)=>{
            return< Post data={post}  id={id} />

            
        })}
        
        </div>
  )
}

export default Posts