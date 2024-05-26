import React, { useState } from 'react';

interface HobbiesSectionProps {
  language: string;
}

const HobbiesSection: React.FC<HobbiesSectionProps> = ({ language }) => {
  return (
    <section id="hobbies" className="w-full h-screen flex flex-col items-center justify-center bg-gray-800 text-gray-100 relative">
      <h2 className="text-5xl text-center font-bold mx-20">Hobbies</h2>
      <p className="mt-4">Coming soon...</p>
    </section>
  );
};

export default HobbiesSection;
