import React, { useEffect, useState } from 'react';
import axios from '../api/axios'; // Your axios instance
import ArtistHeroSection from '../components/ArtistHeroSection';
import ArtistGrid from '../components/ArtistGrid';

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get('/artists');
        setArtists(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load artists');
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div>
      <ArtistHeroSection />
      {loading ? (
        <div className="text-center text-white">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <ArtistGrid artists={artists} />
      )}
    </div>
  );
};

export default Artists;
