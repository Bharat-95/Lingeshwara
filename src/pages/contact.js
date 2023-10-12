import React from "react";
import "../app/globals.css";
import Header from "./header";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {BsWhatsapp} from 'react-icons/bs'
import Link from "next/link";

const contact = () => {
  const form = useRef();
  const phoneNumber = '917993281554';
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const values = Object.fromEntries(formData.entries());
    if (Object.values(values).some(value => !value)) {
      alert('Please fill in all required fields.');
      return;
    }


    emailjs.sendForm('service_4qz4jej', 'template_pwjf3er', form.current, 'fAyqMNCo_nnEZc7qV')
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          alert('Thank you for details we will reach you soon!')
          setIsSubmitted(true);
        
        form.current.reset();
      }, (error) => {
          console.log(error.text);
      });

  };


  return (
    <div className="">
      <Header />
      <div className="space-y-6 mt-20 ">
        <div className="text-center text-xl ">We would love to hear from you</div>
       
        <div className=" flex  justify-center ">
         
          <form className="space-y-6  " ref={form} onSubmit={sendEmail}>
            <div className="">
              <div className="text-xl font-thin ">Full Name:</div>
              <input
                type="text" name="user_name"
                className="hlg:h-10 md:lg:h-10 lg:w-96 md:w-96 w-52 h-5 p-4"
              ></input>
            </div>
            <div>
              
              <div className="text-3xl font-thin"> Email: </div>
              <input
               type="email" name="user_email"
                placeholder="Email address"
                className="lg:h-10 md:lg:h-10 lg:w-96 md:w-96 w-52 h-5 p-4 text-black"
              ></input>
            </div>
            <div>
          
              <div className="text-3xl font-thin"> Phone Number: </div>
              <input
                placeholder="Phone Number"
                name="phone_number"
                className="lg:h-10 md:lg:h-10 lg:w-96 md:w-96 w-52 h-5 p-4"
              ></input>
            </div>
            <div>
             
              <div className="text-3xl font-thin">A Brief Note: </div>
              <textarea
                type="text"
                name="message"
                className="lg:h-10 md:lg:h-10 lg:w-96 md:w-96 w-52 h-5 p-2 text-black"
              ></textarea>
            </div>
            <div className=" text-center">
          <button type="submit" value="Send" className="bg-gradient-to-r from-blue-950 to-blue-400 h-10 w-20 hover:text-red-300 rounded-lg" >
            Submit
          </button>
          </div>
          </form>
        </div>
       
      </div>

      <div className="flex  justify-center space-x-4 mt-8 ">
        <div>You can also reach us on Whatsapp </div>
    
       <Link href="https://wa.me/917993291664"><BsWhatsapp size={25}/></Link>
       
    
      </div>
    </div>
  );
};

export default contact;
