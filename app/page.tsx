"use client"

import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import './globals.css';

async function addDataToFireStore(name: string, email: string, message: string) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document ", error);
    return false;
  }
}

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos < 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const added = await addDataToFireStore(name, email, message);
    if (added) {
      setName("");
      setEmail("");
      setMessage("");
      alert("Data added to the database.");
    }
  }

  const scrollToInquiries = () => {
    const inquiriesSection = document.getElementById('inquiries');
    if (inquiriesSection) {
      inquiriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <section className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 relative gap-5">
        <h1 className='text-5xl text-center font-bold'>Eleazar James Galope</h1>
        <p>Hi</p>
        <button
          onClick={scrollToInquiries}
          className={`p-5 text-2xl border rounded-full absolute bottom-4 right-4 transition-opacity duration-250 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ↓
        </button>
      </section>
      
      <section id="inquiries" className="w-full flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-10">
        <div className='border-white border-4 p-5 rounded-lg'>
          <h2 className='text-large text-center font-bold m-10'>Inquiries?</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline' 
                id='name' 
                type='text' 
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline' 
                id='email' 
                type='email' 
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor='message'>
                Message
              </label>
              <textarea 
                className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline' 
                id='message' 
                placeholder='Enter your message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className='flex items-center justify-between'>
              <button 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
