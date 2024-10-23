import { useState, useEffect } from 'react';
import axios from '../api/axios'; // Axios instance with base URL
import AlbumCard from '../components/AlbumCard'; // Import AlbumCard component
import Layout from '../components/Layout'; // Import Layout component

const Albums = () => {
  const [albums, setAlbums] = useState([]); // State to store albums fetched from the backend
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error state

  // Fetch albums from the backend when the component mounts
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('/albums'); // Fetch albums from backend API
        setAlbums(response.data.data); // Assuming the albums are in the 'data' field
        setLoading(false); // Stop loading once data is fetched
      } catch (err) {
        setError('Error fetching albums'); // Set error state if there's a problem
        setLoading(false); // Stop loading on error
      }
    };

    fetchAlbums(); // Call the function to fetch albums
  }, []);

  // Show loading spinner while fetching
  if (loading) return <div className="text-white">Loading...</div>;
  
  // Show error message if there's an error
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-white mb-6">Albums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {albums.length > 0 ? (
            albums.map((album) => (
              <AlbumCard key={album.id} album={album} /> // Use AlbumCard to display each album
            ))
          ) : (
            <div className="text-white">No albums available</div> // Display message if no albums found
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Albums;
