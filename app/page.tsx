"use client"

import React from 'react';
import './globals.css';
import BackgroundMusic from './components/BackgroundMusic';
import IntroSection from './mainpage/intro';
import ProficiencySection from './mainpage/proficiency';
import ProjectsSection from './mainpage/projects';
import HobbiesSection from './mainpage/hobbies';
import InquiriesSection from './mainpage/inquiries';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <BackgroundMusic />
      <IntroSection /> {/* bg-gray-900 text-gray-100*/}
      <ProficiencySection /> {/* bg-gray-800 text-gray-100 */}
      <ProjectsSection /> {/* bg-gray-900 text-gray-100*/}
      <HobbiesSection /> {/* bg-gray-800 text-gray-100*/}
      <InquiriesSection /> {/* bg-gray-900 text-gray-100 */}
    </main>
  );
}
