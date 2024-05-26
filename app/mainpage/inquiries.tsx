import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const InquiriesSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
      alert("I received your message. Stay tuned for my response!");
    } catch (error) {
      alert("Unfortunately, an error eccured. Please try again later!")
      console.error("Error sending message: ", error);
    }
  };

  return (
    <section id="inquiries" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 relative py-10">
      <div className="border-white border-0 p-20 rounded-lg">
        <h2 className="text-3xl text-center font-bold m-3">You have inquiries?</h2>
        <p className="text-large text-center italic m-3">Just drop me a message!</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex items-center align-middle justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div id="siteAbout" className="absolute bottom-6 right-6 text-gray-300 mb-0 mr-0 w-48 md:w-60 text-right">
        <p className="text-xs">Coded in <a className="transition-colors duration-300 hover:text-blue-500" href="https://code.visualstudio.com">Visual Studio Code.</a> Built with <a className="transition-colors duration-300 hover:text-blue-500" href="https://tailwindcss.com">Tailwind CSS</a> and <a className="transition-colors duration-300 hover:text-blue-500" href="https://tailwindcss.com">Next.js.</a>Text is set in <a className="transition-colors duration-300 hover:text-blue-500" href="https://www.tokotype.com">Tokotype</a>'s <a className="transition-colors duration-300 hover:text-blue-500" href="https://fonts.google.com/specimen/Plus+Jakarta+Sans">Plus Jakarta Sans</a> interface.</p>
      </div>
    </section>
  );
};

export default InquiriesSection;
