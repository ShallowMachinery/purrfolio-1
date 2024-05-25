import React, { useState } from 'react';

interface Card {
  title: string;
  description: string;
  imageUrl: string; // Path to your image
}

const cardsData: Card[] = [
  {
    title: 'Skilled in Various Programming Languages',
    description: 'Experienced with VB.NET, Python, Java, HTML, and CSS.',
    imageUrl: '/proglang.jpg', // Replace with your image path
  },
  {
    title: 'Proficiency in MS Office Apps',
    description: 'Earned certificates from Microsoft for passing Word 2019, Excel 2019, Powerpoint 2019 and 2013, and Access 2013 Specialist Exams.',
    imageUrl: '/microsoftapps.png', // Replace with your image path
  },
  {
    title: 'Machine Learning',
    description: 'Exploring concepts like deep learning and natural language processing.',
    imageUrl: '/tn.jpg', // Replace with your image path
  },
];

const ProficiencySection: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
  };

  const card = cardsData[currentCardIndex];

  return (
    <section id="proficiency" className="w-full h-screen flex flex-col items-center justify-center bg-gray-800 text-gray-100 relative">
      <h2 className="text-5xl text-center font-bold mx-20">About me</h2>
      <section id="longAboutMe" className="w-3/4 text-center text-xl mt-10 mx-10 p-7 italic">
        <p>I have a strong interest in both computer science and music production. Computer science fascinates me with its endless possibilities for problem-solving and innovation, while music production allows me to express my creativity and emotions. I'm motivated by the opportunity to constantly learn and grow in both fields.</p>
      </section>

      {/* Card container with transition */}
      <div className="flex overflow-x-hidden w-full justify-center transition duration-300 ease-in-out transform translate-x-0">
          {cardsData.map((cardData, index) => (
            <div
              key={cardData.title}
              className={`rounded-lg shadow-md w-4/5 p-6 m-4 hover:scale-105 transition-transform duration-300 ease-in-out transform ${
                index === currentCardIndex ? 'opacity-100' : 'opacity-0 hidden'
              }`}
            >
            <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
              <img src={cardData.imageUrl} alt={cardData.title} className="w-full h-full object-cover absolute top-0 left-0 rounded-lg" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75 rounded-lg"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold text-white">{cardData.title}</h3>
                <p className="text-gray-100">{cardData.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-10 px-10">
        <button
          type="button"
          className="bg-gray-700 text-gray-100 px-4 py-2 rounded hover:bg-gray-800 transition duration-300 ease-in-out mr-4"
          onClick={handlePrevCard}
          disabled={currentCardIndex === 0}
        >
          Previous
        </button>
        <button
          type="button"
          className="bg-gray-700 text-gray-100 px-4 py-2 rounded hover:bg-gray-800 transition duration-300 ease-in-out"
          onClick={handleNextCard}
          disabled={currentCardIndex === cardsData.length - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ProficiencySection;
