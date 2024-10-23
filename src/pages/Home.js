import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import FeaturedAlbums from '../components/FeaturedAlbums'; // Import FeaturedAlbums
import { useState, useEffect } from 'react';
import axios from '../api/axios'; // Axios for API calls

const Home = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('/albums'); // Fetch albums from your API
        setAlbums(response.data.data); // Assuming albums are returned in 'data'
      } catch (error) {
        console.error('Failed to fetch albums', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <Layout>
      <HeroSection />
      <FeaturedAlbums albums={albums} /> {/* Add FeaturedAlbums section */}
    </Layout>
  );
};

export default Home;
