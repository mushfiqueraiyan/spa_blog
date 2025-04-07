import React, { useEffect,useState } from 'react'
import Blog from './Blog'

const Blogs = ({handleBookMark,markAsRead}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("blogs.json");
                const data = await res.json();
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
    
        fetchBlogs();
    }, []);

  return (
    <div>
        <h1 className='text-xl font-bold md:px-2 lg:px-0 px-0'>Total Blogs: {blogs.length}</h1>
        <div className='all-blogs grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-[1200px] gap-2'>
            {
                blogs.map((blog)=> <Blog handleBookMark={handleBookMark} markAsRead={markAsRead} key={blog.id} blog={blog}/>)
            }
        </div>
    </div>
  )
}

export default Blogs