"use client"

import React, { useState, useEffect } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import IntroSection from './mainpage/intro';
import ProficiencySection from './mainpage/proficiency';
import ProjectsSection from './mainpage/projects';
import HobbiesSection from './mainpage/hobbies';
import InquiriesSection from './mainpage/inquiries';

export default function Home() {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'jp' : 'en'));
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <IntroSection language={language} />
      <ProficiencySection language={language} />
      <ProjectsSection language={language} />
      <HobbiesSection language={language} />
      <InquiriesSection language={language} />
    </main>
  );
}
