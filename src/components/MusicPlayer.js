import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 w-16 h-16 bg-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-600 transition-transform transform hover:scale-110 cursor-pointer">
      <div onClick={togglePlayPause} className="text-white text-2xl">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </div>
    </div>
  );
};

export default MusicPlayer;
