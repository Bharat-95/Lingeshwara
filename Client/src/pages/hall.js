import React from 'react'
import { useState, useEffect } from 'react'
import "../app/globals.css";

const hall = () => {

    const [data, setData] = useState(null);

   useEffect (() => {

    const fetchData = async () => {
try {
  
const response = await fetch('http://localhost:4000/hall')
const data = await response.json();

setData(data);

} catch (error) {
  
  console.error('Unable to fetch data', error);
}

    }

fetchData();
   } ,[]); 
  
    if (data) {
      
      return (
        <div>
        <div className='text-2xl '>Products</div>
        <div>
        <ul className='grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-10 mx-10 my-10 '>
          {data.map((Hall) => (
            <li key={Hall._Id} >
              <h2>{Hall.Title}</h2>
              <p>Price: {Hall.Price}</p>
            </li>
          ))}
        </ul>
        </div>
      </div>
      )
    }
  
    return <div>Loading...</div>;
  }
  

export default hall