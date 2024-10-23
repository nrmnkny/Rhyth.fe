import React from 'react';

const ArtistHeroSection = () => {
  return (
    <div className="relative h-80 flex items-center justify-center bg-black">
      <div className="relative z-10 text-center">
        <h1 className="text-white text-6xl font-extrabold tracking-wide">
          Meet the Artists
        </h1>
        <p className="text-gray-400 text-xl mt-4">
          Explore the creators behind the music.
        </p>
      </div>
    </div>
  );
};

export default ArtistHeroSection;
