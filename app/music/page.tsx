"use client";
import React, { useState, useEffect } from 'react';
import '../globals.css';
import Navbar from '../components/Navbar_Music';
import Credits from '../components/Credits';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faItunesNote, faYoutube, faDeezer } from '@fortawesome/free-brands-svg-icons';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const MusicPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <section className="text-center my-10">
        <h1 className="text-4xl font-bold mb-4">Newest release</h1>
        <a href="/album/18to21/"><h1 className="text-3xl font-bold transition-colors duration-300 hover:text-blue-500">'18 to '21</h1></a>
        <p className="text-base mt-4 px-5"><b>Release date:</b> June 21, 2024</p>
      </section>
      <section className="flex flex-col md:flex-row items-center">
        <img src="/album_covers/cover_18to21.jpg" alt="'18 to '21 album cover" className="w-80 h-80 object-cover rounded-lg shadow-lg mb-10 md:mb-0 md:mr-10" />
        <section className="mb-10 w-full max-w-lg">
          <h2 className="text-2xl font-semibold pl-6 mb-6">Listen</h2>
          <div className="space-y-4 mx-5 w-full">
            <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faSpotify} className="text-xl mr-4" />
                <span className="text-white">Spotify</span>
              </div>
              <a href="https://open.spotify.com/album/7eX3gRrK6eTWKLTb7sxwPL" className="px-4 py-1 bg-gray-200 text-gray-800 rounded">Play</a>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faYoutube} className="text-xl mr-4" />
                <span className="text-white">YouTube</span>
              </div>
              <a href="https://www.youtube.com/playlist?list=PLbwIjgqtDK_4HUBXHehvG53I_neXSNdN1" className="px-4 py-1 bg-gray-200 text-gray-800 rounded">Watch</a>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faItunesNote} className="text-xl mr-4" />
                <span className="text-white">Apple Music</span>
              </div>
              <a href="https://music.apple.com/ph/album/18-to-21/1750852721" className="px-4 py-1 bg-gray-200 text-gray-800 rounded">Play</a>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faDeezer} className="text-xl mr-4" />
                <span className="text-white">Deezer</span>
              </div>
              <a href="https://www.deezer.com/en/album/597646342" className="px-4 py-1 bg-gray-200 text-gray-800 rounded">Play</a>
            </div>
          </div>
        </section>
      </section>
      <Credits />
    </main>
  );
};

export default MusicPage;
