import React from 'react'
import { FaBookmark } from "react-icons/fa6";

const Blog = ({blog,handleBookMark,markAsRead}) => {
    // console.log(handleBookMark)
    const {name,author,authorImage,coverImage,description,postDate,readingTime,hashtags,id} = blog
  return (
   <>
   
   
   <div className='md:w-[600px] lg:w-[520px] md:px-2 lg:px-0 px-0 mt-5'>
    <div className='flex my-2 text-blue-500 cursor-pointer'><FaBookmark onClick={()=>handleBookMark(blog)}/></div>
        <img src={coverImage} className='w-full h-[300px] rounded-xl' alt="" />
        <h1 className='text-xl mt-2 font-bold'>{name}</h1>
        <p>{description}</p>
        <div className='flex gap-2 items-center my-2'>
            <img src={authorImage} className='rounded-[50%] w-[40px] h-[40px] object-cover' alt="" /> 
            <p className='font-bold text-gray-500'>{author}</p>
        </div>
        <div className='flex gap-2 text-gray-500 my-3'>
        {
            hashtags.map((tags,i)=> <p key={i} className='bg-blue-100 p-1.5 rounded-md'>{tags}</p>)
        }
        </div>
        <div className='flex justify-between items-center'>
        <button className='btn btn-primary mt-2 bg-blue-500 border-none' onClick={()=> markAsRead(blog.readingTime,blog.id)}>Mark as Read</button>
        <p className='text-gray-400'>Date: {postDate}</p>
        </div>
   </div>
   
   </>

  )
}

export default Blog
