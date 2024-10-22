const HeroSection = () => {
    return (
      <div className="relative h-screen flex items-center justify-center text-center bg-black">
        <div className="relative z-10">
          <h1 className="text-white text-6xl font-extrabold tracking-wide">
            Discover Your Rhythm
          </h1>
          <p className="text-gray-400 text-xl mt-4">
            Explore new sounds and artists today.
          </p>
          <button className="mt-8 px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  