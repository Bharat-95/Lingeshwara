import React from 'react'

const footer = () => {
  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-blue-950 to-blue-500 h-12 lg:mt-20 mt-64 md:mt-96'>
    
        <div className=''> &copy; {new Date().getFullYear()} Lingeshwara Tiles</div>
    </div>
  )
}

export default footer