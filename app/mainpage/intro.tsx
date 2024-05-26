import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faXTwitter, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';

const IntroSection = () => {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const handleMouseEnter = (text: string) => {
    setTooltip(text);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
<section id="intro" className="w-full min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 relative">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-0">
        {/* First Column */}
        <div className="flex flex-col items-center text-center md:items-end md:text-right w-full md:w-1/2 my-auto">
          <h1 id="fullName" className="text-3xl sm:text-5xl font-bold mx-5 md:mx-10">Eleazar James Galope</h1>
          <section id="shortAboutMe" className="text-lg sm:text-xl mt-10 mx-5 md:mx-10 italic">
            <p>An aspiring Computer Science major student with a passion for learning. I'm eager to delve into the world of technology and music, exploring new avenues for creativity and innovation.</p>
          </section>
          <div className="mt-10 flex flex-row space-x-2 mx-5 md:mx-10">
            <div className="relative">
              <a href="mailto:eleazar.galope@gmail.com" className="text-gray-300 hover:text-blue-500 flex items-center"
                 onMouseEnter={() => handleMouseEnter('Email')}
                 onMouseLeave={handleMouseLeave}>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              </a>
              {tooltip === 'Email' && (
                <div className="bg-gray-800 text-white py-1 px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-100 pointer-events-none transition-opacity duration-300 z-50 flex items-center justify-center">
                  <p className="text-xs">Email</p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1 rotate-45 bg-gray-800"></div>
                </div>
              )}
            </div>
            <div className="relative">
              <a href="https://www.linkedin.com/in/eleazar-galope/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 flex items-center"
                 onMouseEnter={() => handleMouseEnter('LinkedIn')}
                 onMouseLeave={handleMouseLeave}>
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              </a>
              {tooltip === 'LinkedIn' && (
                <div className="bg-gray-800 text-white py-1 px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-100 pointer-events-none transition-opacity duration-300 z-50 flex items-center justify-center">
                  <p className="text-xs">LinkedIn</p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1 rotate-45 bg-gray-800"></div>
                </div>
              )}
            </div>
            <div className="relative">
              <a href="https://www.facebook.com/eleazargalope0/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 flex items-center"
                 onMouseEnter={() => handleMouseEnter('Facebook')}
                 onMouseLeave={handleMouseLeave}>
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              </a>
              {tooltip === 'Facebook' && (
                <div className="bg-gray-800 text-white py-1 px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-100 pointer-events-none transition-opacity duration-300 z-50 flex items-center justify-center">
                  <p className="text-xs">Facebook</p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1 rotate-45 bg-gray-800"></div>
                </div>
              )}
            </div>
            <div className="relative">
              <a href="https://x.com/_shaluma" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 flex items-center"
                 onMouseEnter={() => handleMouseEnter('Twitter')}
                 onMouseLeave={handleMouseLeave}>
                <FontAwesomeIcon icon={faXTwitter} className="mr-2" />
              </a>
              {tooltip === 'Twitter' && (
                <div className="bg-gray-800 text-white py-1 px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-100 pointer-events-none transition-opacity duration-300 z-50 flex items-center justify-center">
                  <p className="text-xs">X</p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1 rotate-45 bg-gray-800"></div>
                </div>
              )}
            </div>
            <div className="relative">
              <a href="https://www.instagram.com/keepers2718/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 flex items-center"
                 onMouseEnter={() => handleMouseEnter('Instagram')}
                 onMouseLeave={handleMouseLeave}>
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              </a>
              {tooltip === 'Instagram' && (
                <div className="bg-gray-800 text-white py-1 px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-100 pointer-events-none transition-opacity duration-300 z-50 flex items-center justify-center">
                  <p className="text-xs">Instagram</p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1 rotate-45 bg-gray-800"></div>
                </div>
              )}
            </div>
            <div className="relative">
              <a href="https://open.spotify.com/artist/5MMvI5sqs62xL24Vu9OYyy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 flex items-center"
                 onMouseEnter={() => handleMouseEnter('Spotify')}
                 onMouseLeave={handleMouseLeave}>
                <FontAwesomeIcon icon={faSpotify} className="mr-2" />
              </a>
              {tooltip === 'Spotify' && (
                <div className="bg-gray-800 text-white py-1 px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-100 pointer-events-none transition-opacity duration-300 z-50 flex items-center justify-center">
                  <p className="text-xs">Spotify</p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1 rotate-45 bg-gray-800"></div>
                </div>
              )}
            </div>
            <div className="relative">
              <a href="https://www.musixmatch.com/profile/3vUCAOOV5fvpMaku-UHUOcJItuaBS4n4Q6jiTWIS2mlt5EHI2vGtYSmwQyoj4r37a3z5F46H7kxDFzu9Zm0_VngrBvmMXizOQI7qEG4B645zulmJ0dVwbXtRLMx_hzaKcWeovlAELYXi4p5UhcrjoJkVsjOPRwH_kp9xXhBNDs0" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 flex items-center"
                 onMouseEnter={() => handleMouseEnter('Musixmatch Specialist Profile')}
                 onMouseLeave={handleMouseLeave}>
              <svg viewBox="4 4 40 40" xmlns="http://www.w3.org/2000/svg" className="mr-2 w-4 h-4 fill-current">
                <path className="c" d="m5.5,31.2L36.5,7.1c2.4-1.9,6-.2,6,2.9v28c0,3.1-3.5,4.8-6,2.9L5.5,16.8"></path>
                <path className="c" d="m42.5,31.2L11.5,7.1c-2.4-1.9-6-.2-6,2.9v28c0,3.1,3.5,4.8,6,2.9l31-24.1"></path>
              </svg>
              </a>
              {tooltip === 'Musixmatch Specialist Profile' && (
                <div className="bg-gray-800 text-white py-1 px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-100 pointer-events-none transition-opacity duration-300 z-50 flex items-center justify-center">
                  <p className="text-xs text-center">Musixmatch Specialist Profile</p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1 rotate-45 bg-gray-800"></div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Second Column */}
        <div className="flex flex-col items-start w-full md:w-1/2 mt-10 md:mt-0">
          <img 
            src="/portrait.jpeg" 
            alt="Eleazar James Galope" 
            className="rounded-lg w-full max-w-sm" 
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
