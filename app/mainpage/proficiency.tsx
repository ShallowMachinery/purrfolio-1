import React, { useState } from 'react';

interface Card {
  title: string;
  description: string;
  imageUrl: string;
}

const cardsData: Card[] = [
  {
    title: 'Skilled in various programming languages',
    description: 'Experienced with VB.NET, Python, Java, HTML, and CSS.',
    imageUrl: '/proglang.jpg',
  },
  {
    title: 'Proficiency in Microsoft Office Applications',
    description: 'Earned certificates from Microsoft for passing Word 2019, Excel 2019, Powerpoint 2019 and 2013, and Access 2013 Specialist Exams.',
    imageUrl: '/microsoftapps.png',
  },
  {
    title: 'Expertise in songwriting and music production',
    description: 'A <a href="https://open.spotify.com/artist/5MMvI5sqs62xL24Vu9OYyy" target="_blank" rel="noopener noreferrer">verified Spotify artist</a>, with years of experience in songwriting and an avid user of <a href="https://www.image-line.com/fl-studio/" target="_blank" rel="noopener noreferrer">Fruity Loops</a>.',
    imageUrl: '/musicprod.png',
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
    <section id="proficiency" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-800 text-gray-100 relative py-10">
      <h2 className="text-3xl sm:text-4xl text-center font-bold mx-20">About me</h2>
      <section id="longAboutMe" className="w-3/4 text-center text-base mt-10 mx-10 p-7 italic sm:text-lg">
        <p>I have a strong interest in both computer science and music production. Computer science fascinates me with its endless possibilities for problem-solving and innovation, while music production allows me to express my creativity and emotions. I'm motivated by the opportunity to constantly learn and grow in both fields.</p>
      </section>

      {/* Card container */}
      <div className="flex overflow-x-hidden w-full justify-center transition duration-300 ease-in-out transform translate-x-0">
        {cardsData.map((cardData, index) => (
          <div
            key={cardData.title}
            className={`rounded-lg shadow-md w-full sm:w-4/5 p-6 m-4 hover:scale-105 transition-transform duration-300 ease-in-out transform ${
              index === currentCardIndex ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
              <img src={cardData.imageUrl} alt={cardData.title} className="w-full h-full object-cover absolute top-0 left-0 rounded-lg" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75 rounded-lg"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-base sm:text-xl font-bold text-white">{cardData.title}</h3>
                <p className="text-gray-100 sm:text-base text-xs" dangerouslySetInnerHTML={{ __html: card.description }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center items-center gap-5 mt-10 px-10 w-full max-w-xl">
        <button
          type="button"
          className="bg-gray-700 text-gray-100 px-4 py-2 rounded hover:bg-gray-800 transition duration-300 ease-in-out"
          onClick={handlePrevCard}
        >
          Previous
        </button>
        <button
          type="button"
          className="bg-gray-700 text-gray-100 px-4 py-2 rounded hover:bg-gray-800 transition duration-300 ease-in-out"
          onClick={handleNextCard}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ProficiencySection;
