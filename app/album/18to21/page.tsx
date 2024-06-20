"use client";

import React, { useState, useEffect } from 'react';
import '../../globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faItunesNote, faYoutube, faDeezer } from '@fortawesome/free-brands-svg-icons';

const AlbumPage = () => {
  const releaseDate = new Date('2024-06-21T00:00:00'); // Adjust the time as needed
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
      <section className="text-center my-10">
        <h1 className="text-4xl font-bold">'18 to '21</h1>
        <p className="text-lg mt-4 px-5"><b>Release date:</b> June 21, 2024</p>
          {timeRemaining && (
            <span><b>Time remaining:</b> {timeRemaining}</span>
          )}
        <p className="text-lg mt-4 px-5">Compilation of my songs from 2018-2021 that I cherish the most.</p>
      </section>
      <section className="flex flex-col md:flex-row items-center">
        <img src="/album.jpg" alt="Album Cover" className="w-80 h-80 object-cover rounded-lg shadow-lg mb-10 md:mb-0 md:mr-10" />
        <section className="my-10 md:hidden">
          <h2 className="text-3xl font-semibold">Listen Now</h2>
          <div className="mt-4 flex space-x-4">
            <a href="https://link-to-spotify" className="px-4 py-2 bg-green-600 text-white rounded">Spotify</a>
            <a href="https://link-to-apple-music" className="px-4 py-2 bg-black text-white rounded">Apple Music</a>
            <a href="https://link-to-youtube" className="px-4 py-2 bg-red-600 text-white rounded">YouTube</a>
          </div>
        </section>
        <div className="md:text-left text-center">
          <h2 className="text-3xl font-semibold">Track list:</h2>
          <ul className="mt-4 text-lg">
            <li>1. Maniwala <small>(2018)</small></li>
            <li>2. Langit <small>(2019)</small></li>
            <li>3. Mapanghusga <small>(2019)</small></li>
            <li>4. Salubong <small>(2019)</small></li>
            <li>5. Umaga <small>(2020)</small></li>
            <li>6. Niyebe <small>(2020)</small></li>
            <li>7. Habang-buhay <small>(2020)</small></li>
            <li>8. Telepono (with Lexter Ramirez) <small>(2021)</small></li>
            <li>9. Alalaumbaga <small>(2021)</small></li>
            <li>10. Uniberso <small>(2021)</small></li>
          </ul>
        </div>
      </section>
      <section className="my-10 w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Listen Now</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faSpotify} className="text-2xl mr-4" />
              <span className="text-white">Spotify</span>
            </div>
            <a className="px-4 py-2 bg-gray-200 text-gray-800 rounded cursor-not-allowed">Play</a>
          </div>
          <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faYoutube} className="text-2xl mr-4" />
              <span className="text-white">YouTube (Lyric Videos)</span>
            </div>
            <a href="https://www.youtube.com/playlist?list=PLbwIjgqtDK_4HUBXHehvG53I_neXSNdN1" className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Watch</a>
          </div>
          <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faItunesNote} className="text-2xl mr-4" />
              <span className="text-white">Apple Music</span>
            </div>
            <a href="https://music.apple.com/ph/album/18-to-21/1750852721" className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Play</a>
          </div>
          <div className="flex justify-between items-center p-4 bg-[#29324e] shadow-lg rounded-lg">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faDeezer} className="text-2xl mr-4" />
              <span className="text-white">Deezer</span>
            </div>
            <a className="px-4 py-2 bg-gray-200 text-gray-800 rounded cursor-not-allowed">Play</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AlbumPage;
