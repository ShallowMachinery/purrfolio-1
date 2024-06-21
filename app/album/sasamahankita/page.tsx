"use client";

import React, { useState, useEffect } from 'react';
import '../../globals.css';
import Navbar from '../../components/Navbar_Music';
import Discography from '../../music/Discography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faItunesNote, faYoutube, faDeezer } from '@fortawesome/free-brands-svg-icons';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const releaseId: string = 'sasamahankita';

interface SmartLinks {
  spotify: string;
  deezer: string;
  applemusic: string;
  youtube: string;
}

const AlbumPage = () => {
  const [links, setLinks] = useState<SmartLinks>({
    spotify: '',
    applemusic: '',
    deezer: '',
    youtube: ''
  });

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'smart_links', 'album', releaseId));
        const data: Partial<SmartLinks> = {}; // Use Partial to allow incremental assignment
        querySnapshot.forEach((doc) => {
          const docData = doc.data() as SmartLinks;
          Object.assign(data, docData); // Merge document data into `data` object
        });
        setLinks(data as SmartLinks); // Ensure data is cast to `SmartLinks` before setting state
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchLinks();
  }, []);

  const releaseDate = new Date('2024-02-23T00:00:00');
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const currentDate = new Date();
      const timeDifference = releaseDate.getTime() - currentDate.getTime();

      if (timeDifference <= 0) {
        setTimeRemaining('');
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeRemaining(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    };

    // Initial calculation
    calculateTimeRemaining();

    // Update the countdown every second
    const interval = setInterval(calculateTimeRemaining, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [releaseDate]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <section className="text-center my-10">
        <h1 className="text-4xl font-bold">Sasamahan Kita</h1>
        <p className="text-lg mt-4 px-5"><b>Release date:</b> February 23, 2024</p>
        {timeRemaining && (
          <span><b>Time remaining:</b> {timeRemaining}</span>
        )}
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center">
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ed/f0/31/edf0314e-0896-4a84-558b-0015c19b28cc/198009754441.png/1000x1000.png" alt="Sasamahan Kita album cover" className="w-80 h-80 object-cover rounded-lg shadow-lg mb-10 md:mb-0 md:mr-10" />
        <section className="mb-10 w-full max-w-lg md:hidden">
          <h2 className="text-3xl font-semibold text-center mb-6">Listen</h2>
          <div className="space-y-4 mx-5">
            <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faSpotify} className="text-2xl mr-4" />
                <span className="text-white">Spotify</span>
              </div>
              <a href={links.spotify} className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Play</a>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faYoutube} className="text-2xl mr-4" />
                <span className="text-white">YouTube</span>
              </div>
              <a href={links.youtube} className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Watch</a>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faItunesNote} className="text-2xl mr-4" />
                <span className="text-white">Apple Music</span>
              </div>
              <a href={links.applemusic} className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Play</a>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faDeezer} className="text-2xl mr-4" />
                <span className="text-white">Deezer</span>
              </div>
              <a href={links.deezer} className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Play</a>
            </div>
          </div>
        </section>
        <div className="md:text-left text-center mb-5">
          <h2 className="text-3xl font-semibold">Track list:</h2>
          <ul className="mt-4 text-lg">
            <li>1. Sasamahan Kita</li>
            <li>2. Sasamahan Kita <small>(Extended Version)</small>*</li>
          </ul>
          <p className="text-[8px]">* only available in Spotify, YouTube Music, and Apple Music</p>
        </div>
      </section>
      <section className="my-10 w-full max-w-lg hidden md:block">
        <h2 className="text-3xl font-semibold text-center mb-6">Listen</h2>
        <div className="space-y-4 mx-5">
          <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faSpotify} className="text-2xl mr-4" />
              <span className="text-white">Spotify</span>
            </div>
            <a href={links.spotify} className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Play</a>
          </div>
          <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faYoutube} className="text-2xl mr-4" />
              <span className="text-white">YouTube (Lyric Video)</span>
            </div>
            <a href={links.youtube} className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Watch</a>
          </div>
          <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faItunesNote} className="text-2xl mr-4" />
              <span className="text-white">Apple Music</span>
            </div>
            <a href={links.applemusic} className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Play</a>
          </div>
          <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faDeezer} className="text-2xl mr-4" />
              <span className="text-white">Deezer</span>
            </div>
            <a href={links.deezer} className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Play</a>
          </div>
        </div>
      </section>
      <Discography />
    </main>
  );
};

export default AlbumPage;
