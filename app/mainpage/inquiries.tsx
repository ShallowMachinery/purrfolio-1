import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

interface InquiriesSectionProps {
  language: string;
}

const InquiriesSection: React.FC<InquiriesSectionProps> = ({ language }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [strings, setStrings] = useState({});

  useEffect(() => {
    const fetchStrings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "language_strings"));
        const data = {};
        querySnapshot.forEach((doc) => {
          data[doc.id] = doc.data();
        });
        console.log("Data received from Firestore:", data); // Log the data received
        setStrings(data);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchStrings();
  }, []);

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
      alert(strings[language]?.messagereceived);
    } catch (error) {
      alert(strings[language]?.messagenotsent)
      console.error("Error sending message: ", error);
    }
  };

  return (
    <section id="inquiries" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 relative py-10">
      <div className="border-white border-0 p-20 rounded-lg">
        <h2 className="text-3xl text-center font-bold m-3">{strings[language]?.inquiriestitle}</h2>
        <p className="text-large text-center italic m-3">{strings[language]?.inquiriessubtitle}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
            {strings[language]?.titlename}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder={strings[language]?.placeholdername}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
            {strings[language]?.titleemail}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder={strings[language]?.placeholderemail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
            {strings[language]?.titlemessage}
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder={strings[language]?.placeholdermessage}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex items-center align-middle justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {strings[language]?.submitbutton}
            </button>
          </div>
        </form>
      </div>
      <div id="credits" className="absolute bottom-6 right-6 text-gray-300 mb-0 mr-0 w-48 md:w-60 text-right">
      <p className="text-xs" dangerouslySetInnerHTML={{ __html: strings[language]?.credits }} />
      </div>
    </section>
  );
};

export default InquiriesSection;
