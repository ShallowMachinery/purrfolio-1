import React from 'react';

const IntroSection = () => {
  return (
    <section id="intro" className="w-full h-screen flex items-center justify-center bg-gray-900 text-gray-100 relative">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-0">
        {/* First Column */}
        <div className="flex flex-col items-center text-center md:items-end md:text-right w-full md:w-1/2 my-auto">
          <h1 id="fullName" className="text-3xl sm:text-5xl font-bold mx-10">Eleazar James Galope</h1>
          <section id="shortAboutMe" className="text-lg sm:text-xl mt-10 mx-10 italic">
            <p>An aspiring Computer Science major student with a passion for learning. I'm eager to delve into the world of technology and music, exploring new avenues for creativity and innovation.</p>
          </section>
        </div>
        
        {/* Second Column */}
        <div className="flex flex-col items-start w-full md:w-1/2 mt-10 md:mt-0">
          <img 
            src="/portrait.jpeg" 
            alt="Eleazar James Galope" 
            className="rounded-lg w-full max-w-sm" 
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
