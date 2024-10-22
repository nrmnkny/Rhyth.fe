import Navbar from './Navbar';
import Footer from './Footer';
import MusicPlayer from './MusicPlayer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default Layout;
