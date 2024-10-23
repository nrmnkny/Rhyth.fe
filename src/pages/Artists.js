import { useState, useEffect } from 'react';
import axios from '../api/axios'; // Your Axios instance for API calls
import ArtistCard from '../components/ArtistCard';

const Artists = () => {
  const [artists, setArtists] = useState([]); // State to hold artists
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error state

  useEffect(() => {
    // Fetch artists from backend API
    const fetchArtists = async () => {
      try {
        const response = await axios.get('/artists'); // API call to get artist data
        setArtists(response.data); // Assuming the API returns an array of artists
        setLoading(false);
      } catch (err) {
        setError('Failed to load artists'); // Handle error state
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Artists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default Artists;
