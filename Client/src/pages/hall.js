import React from 'react'
import { useState, useEffect } from 'react'
import "../app/globals.css";

const hall = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
      
     fetch('http://localhost:4000/products')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    if (data) {
      
      return (
        <div>
        <div className='text-2xl '>Products</div>
        <div>
        <ul className='grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-10 mx-10 my-10 '>
          {data.map((item) => (
            <li key={item.Id} >
              <h2>{item.Title}</h2>
              <p>Price: {item.Price}</p>
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