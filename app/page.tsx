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

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      {/* Intro Section */}
      <section id="intro" className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 relative">
        <h1 id="fullName" className='text-6xl text-center font-bold mx-20'>Eleazar James Galope</h1>
        <section id="shortAboutMe" className='w-3/4 text-center text-xl mt-10 mx-10 p-7 italic'>
          <p>An aspiring Computer Science major student with a passion for learning. I'm eager to delve into the world of technology and music, exploring new avenues for creativity and innovation.</p>
        </section>
      </section>

      {/* Proficiency and Skills Section */}
      <section id="proficiency" className="w-full h-screen flex flex-col items-center justify-center bg-gray-800 text-gray-100 relative">
        <h2 className="text-5xl text-center font-bold mx-20">Skills</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-5">
          {/* Card for Microsoft Office */}
          <div className="rounded-lg p-6 shadow-md w-auto relative overflow-hidden mx-10 sm:mx-0 md:mx-0 hover:scale-105 transition-transform duration-300">
            <div className="bg-cover bg-center w-full h-full absolute top-0 left-0" style={{backgroundImage: "url('/microsoftapps.png')", opacity: 0.1}}></div>
            <div className="h-full w-full flex items-center justify-center text-center px-10">
              <h3 className="text-2xl font-bold text-white">Proficient in Microsoft Office Apps</h3>
            </div>
          </div>

          {/* Card for Programming Skills */}
          <div className="rounded-lg p-10 shadow-md w-auto relative overflow-hidden mx-10 sm:mx-0 md:mx-0 hover:scale-105 transition-transform duration-300">
            <div className="bg-cover bg-center w-full h-full absolute top-0 left-0" style={{backgroundImage: "url('/proglang.jpg')", opacity: 0.1}}></div>
            <div className="h-full w-full flex items-center justify-center text-center px-10">
              <h3 className="text-2xl font-bold text-white">Skilled in VB.NET, Python, Java, HTML, CSS, and JS</h3>
            </div>
          </div>

      {/* Card for Web Development Tools */}
          <div className="rounded-lg p-6 shadow-md w-auto relative overflow-hidden mx-10 sm:mx-0 md:mx-0 hover:scale-105 transition-transform duration-300">
            <div className="bg-cover bg-center w-full h-full absolute top-0 left-0" style={{backgroundImage: "url('/tn.jpg')", opacity: 0.1}}></div>
            <div className="h-full w-full flex items-center justify-center text-center px-10">
              <h3 className="text-2xl font-bold text-white">Experienced with Tailwind CSS and Next.JS</h3>
            </div>
          </div>
        </div>
  </section>

      {/* Inquiries Section */}
      <section id="inquiries" className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 relative">
        <div className='border-white border-2 p-32 rounded-lg px-50 min-px-50'>
          <h2 className='text-3xl text-center font-bold m-3'>May problema ka ba?</h2>
          <p className='text-large text-center italic m-3'>ra, chatmate tayo</p>
          <p className='text-large text-center italic m-3'>hehe</p>
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
            <div className='flex items-center align-middle justify-between'>
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
