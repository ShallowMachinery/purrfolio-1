import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

interface Card {
  title: string;
  description: string;  
  imageUrl: string;
}

interface LanguageStrings {
  projectstitle: string;
  projectssubtitle: string;
  pprevcard: string;
  pnextcard: string;
}

interface Strings {
  [key: string]: LanguageStrings;
}

interface ProjectsSectionProps {
  language: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [strings, setStrings] = useState<Strings>({});
  const [cardsData, setCardsData] = useState<Card[]>([]);

  useEffect(() => {
    const fetchStrings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "language_strings"));
        const data: { [key: string]: any } = {};
        querySnapshot.forEach((doc) => {
          data[doc.id] = doc.data();
        });
        setStrings(data);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };
  
    fetchStrings();
  }, []);

  useEffect(() => {
    const fetchCardStrings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "language_strings", language, "projects_strings"));
        const data: Card[] = [];
        querySnapshot.forEach((doc) => {
          // Construct each card object
          const cardData = doc.data() as Card;
          data.push(cardData);
        });
        setCardsData(data);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchCardStrings();
  }, [language]); // Trigger the effect when the language changes

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
  };

  const card = cardsData[currentCardIndex];

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 relative py-10">
      <h2 className="text-3xl sm:text-4xl text-center font-bold mx-20">{strings[language]?.projectstitle}</h2>
      <section id="projectsdesc" className="w-3/4 text-center text-base mt-10 mx-10 p-7 italic sm:text-lg">
        <p>{strings[language]?.projectssubtitle}</p>
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
                <p id="cardDesc" className="text-gray-100 sm:text-base text-xs" dangerouslySetInnerHTML={{ __html: cardData.description }} />
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
          {strings[language]?.pprevcard}
        </button>
        <button
          type="button"
          className="bg-gray-700 text-gray-100 px-4 py-2 rounded hover:bg-gray-800 transition duration-300 ease-in-out"
          onClick={handleNextCard}
        >
          {strings[language]?.pnextcard}
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
