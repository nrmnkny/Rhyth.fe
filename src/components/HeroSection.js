const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center bg-black">
      <video className="absolute inset-0 w-full h-full object-cover opacity-50" autoPlay loop muted>
        <source src="https://res.cloudinary.com/dzbghf4hg/video/upload/v1729696348/video/fwcvhhcqfb3ymqcormpy.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
        <h1 className="text-white text-6xl font-extrabold tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Discover Your Rhythm
        </h1>
        <p className="text-gray-400 text-xl mt-4">
          Explore new sounds and artists today.
        </p>
        <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
