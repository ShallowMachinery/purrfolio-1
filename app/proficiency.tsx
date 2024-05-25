import React, { useState } from 'react';

const ProficiencySection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (type: string) => {
    setExpandedCard(prevState => (prevState === type ? null : type));
  };

  return (
    <section id="proficiency" className="w-full h-screen flex flex-col items-center justify-center bg-gray-800 text-gray-100 relative">
      <h2 className="text-5xl text-center font-bold mx-20">Skills</h2>
      <p className="mt-4">Coming soon...</p>
    </section>
  );
};

export default ProficiencySection;
