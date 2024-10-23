const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 text-white flex justify-between items-center p-4 z-50 shadow-md">
      <div className="text-2xl font-bold tracking-wider">Rhythm.Q</div>
      <div className="flex-grow">
        <ul className="flex justify-center space-x-6 text-lg">
          <li><a href="/" className="hover:text-red-500 transition duration-300">Home</a></li>
          <li><a href="/artists" className="hover:text-red-500 transition duration-300">Artists</a></li>
          <li><a href="/albums" className="hover:text-red-500 transition duration-300">Albums</a></li>
          <li><a href="/reviews" className="hover:text-red-500 transition duration-300">Reviews</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
