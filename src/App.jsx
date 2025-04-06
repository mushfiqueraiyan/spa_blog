import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs/Blogs'

const App = () => {

  const [bookMarked, setBookMarked] = useState([])

  const handleBookMark = (blog)=>{
    setBookMarked([...bookMarked,blog])

  }

  const [readTime, setTime] = useState(0)

  const markAsRead = (time,id)=>{
    const newTime = readTime + time
    setTime(newTime)
    handleRemoveBookmark(id)
    
  }


  const handleRemoveBookmark = (id)=>{
    const remainingBookMark = bookMarked.filter((mark)=> mark.id !== id)
    setBookMarked(remainingBookMark)
  }
  return (
   <>
    <Navbar/>

    <div className="main-container flex max-w-[1500px] mx-auto mt-5 mb-5">
      <div className="left-section w-[1100px] ">
         <Blogs handleBookMark={handleBookMark} markAsRead={markAsRead}/>
      </div>
      <div className="right-section w-[400px] bg-gray-200 rounded-xl p-5">
         <h1>Reading Time: {readTime}</h1>
         <h1>Bookmarks: {bookMarked.length}</h1>

         {
          bookMarked.map((booked,i)=> <div className='bg-blue-200 mt-2 p-3 rounded-xl' key={i}>{booked.name}</div>)
         }
      </div>
    </div>
   </>
  )
}

export default App
