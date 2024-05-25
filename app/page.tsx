"use client"

import React from 'react';
import './globals.css';
import BackgroundMusic from './components/BackgroundMusic';
import IntroSection from './intro';
import InquiriesSection from './inquiries';
import ProficiencySection from './proficiency';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <BackgroundMusic />
      <IntroSection />
      <ProficiencySection />
      <InquiriesSection />
    </main>
  );
}
