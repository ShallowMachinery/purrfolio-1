"use client";

import React, { useState, useEffect } from 'react';
import '../../globals.css';
import Navbar from '../../components/Navbar_Music';
import Discography from '../../music/Discography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faItunesNote, faYoutube, faDeezer } from '@fortawesome/free-brands-svg-icons';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const releaseId: string = 'uniberso';

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

  const releaseDate = new Date('2024-06-21T00:00:00');
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
        <h1 className="text-4xl font-bold">Uniberso</h1>
        <p className="text-lg mt-4 px-5"><b>Release date:</b> May 9, 2021</p>
        {timeRemaining && (
          <span><b>Time remaining:</b> {timeRemaining}</span>
        )}
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full md:w-3/4">
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/36/e8/d4/36e8d4cf-6240-9262-3dee-0f0ea992d2e4/198001120138.png/1000x1000.png" alt="Uniberso album cover" className="w-80 h-80 object-cover rounded-lg shadow-lg mb-10 md:mb-0 md:mr-10" />
        <section className="mb-10 w-full max-w-lg">
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
      </section>
      <Discography />
    </main>
  );
};

export default AlbumPage;
