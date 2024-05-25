import { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Import play and pause icons

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        audioRef.current.volume = 0.75;
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <audio ref={audioRef} src="/sasamahankita.ogg" loop />
      <button
        className="bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        onClick={togglePlayPause}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      {showTooltip && (
        <div className="bg-gray-800 text-white py-1 px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-100 pointer-events-none transition-opacity duration-300 flex items-center justify-center">
           <p className="text-xs">{isPlaying ? 'Pause it' : 'Play a song'}</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1 rotate-45 bg-gray-800"></div>
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;
