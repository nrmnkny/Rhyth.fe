const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full bg-black bg-opacity-80 text-white flex justify-between items-center p-4 z-50">
        <div className="text-2xl font-bold">Rhythm.Q</div>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-neon-blue">Home</a></li>
          <li><a href="/artists" className="hover:text-neon-blue">Artists</a></li>
          <li><a href="/albums" className="hover:text-neon-blue">Albums</a></li>
          <li><a href="/reviews" className="hover:text-neon-blue">Reviews</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  