import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios'; // Your axios instance
import Layout from '../components/Layout';
import AlbumCard from '../components/AlbumCard'; // Assuming you have this component

const ArtistDetails = () => {
  const { id } = useParams(); // Get the artist ID from the URL
  const [artist, setArtist] = useState(null); // State to store artist details
  const [albums, setAlbums] = useState([]); // State to store albums by the artist
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error state

  useEffect(() => {
    const fetchArtistAndAlbums = async () => {
      try {
        // Fetch artist details
        const artistResponse = await axios.get(`/artists/${id}`);
        setArtist(artistResponse.data);

        // Fetch albums by artist ID
        const albumsResponse = await axios.get(`/albums?artistId=${id}`);
        setAlbums(albumsResponse.data.data); // Assuming the albums are in 'data'

        setLoading(false);
      } catch (err) {
        setError('Failed to load artist details and albums');
        setLoading(false);
      }
    };

    fetchArtistAndAlbums();
  }, [id]);

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <Layout>
      <div className="container mx-auto p-8 text-white">
        {artist && (
          <>
            {/* Artist Info */}
            <div className="flex flex-col items-center">
              <img 
                src={artist.image || '/path-to-placeholder-image.jpg'} 
                alt={artist.name} 
                className="rounded-full w-48 h-48 mb-4"
              />
              <h1 className="text-5xl font-bold mb-4">{artist.name}</h1>
              <p className="text-xl mb-4">{artist.bio}</p>
            </div>

            {/* Albums Section */}
            <div className="mt-8">
              <h2 className="text-3xl font-bold mb-4">Albums by {artist.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {albums.length > 0 ? (
                  albums.map((album) => (
                    <AlbumCard key={album.id} album={album} />
                  ))
                ) : (
                  <p className="text-gray-400">No albums available</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default ArtistDetails;
