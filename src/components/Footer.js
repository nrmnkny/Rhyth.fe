import { FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-8 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-white text-lg">Rhythm.Q</h4>
          <p className="mt-4">Explore, review, and discover new music.</p>
          <div className="mt-4 flex space-x-4">
            <a href="https://www.instagram.com/rhythm.cue/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue text-white">
              <FaInstagram size={24} /> {/* Instagram icon */}
            </a>
            <a href="https://x.com/rhythmCue" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue text-white">
              <FaTwitter size={24} /> {/* X (Twitter) icon */}
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white text-lg">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="/" className="hover:text-neon-blue">Home</a></li>
            <li><a href="/artists" className="hover:text-neon-blue">Artists</a></li>
            <li><a href="/albums" className="hover:text-neon-blue">Albums</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg">Subscribe</h4>
          <input type="email" placeholder="Your email" className="w-full mt-4 p-2 bg-gray-800 text-white rounded" />
          <button className="mt-4 w-full bg-white text-black py-2 rounded hover:bg-gray-200 transition duration-300">
          Subscribe
        </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
