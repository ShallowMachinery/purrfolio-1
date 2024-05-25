import React from 'react';

const IntroSection = () => {
  return (
    <section id="intro" className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 relative">
      <h1 id="fullName" className="text-6xl text-center font-bold mx-20">Eleazar James Galope</h1>
      <section id="shortAboutMe" className="w-3/4 text-center text-xl mt-10 mx-10 p-7 italic">
        <p>An aspiring Computer Science major student with a passion for learning. I'm eager to delve into the world of technology and music, exploring new avenues for creativity and innovation.</p>
      </section>
    </section>
  );
};

export default IntroSection;
