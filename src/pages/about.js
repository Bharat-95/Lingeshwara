import React from "react";
import "../app/globals.css";
import Image from "next/image";
import Header from '../pages/header'


const about = () => {
  return (
    <div>
      <Header/>
      <div className="grid grid-flow-col lg:space-x-60 lg:m-20 md:m-10 md:space-x-24 m-6 space-x-20">
        <Image
          src="/My.jpeg"
          width={200}
          height={100}
          alt="Picture of the author"
        ></Image>
        <div className=" lg:text-xl md:text-xl lg:justify-center md:justify-center lg:leading-loose md:leading-loose text-[10px]"> 
          Lingeshwara Tiles was formed in the year of 2021 with a sense of
          providing quality tiles at budget price to the customer. <p> N. Anil Kumar the
          founder is a government employee who is parallelly running the
          buisness and we are proud to inform that we are growing really fast in
          the market because of the quality and the price we provide.</p>
        </div>
      </div>
  
    </div>
  );
};

export default about;
