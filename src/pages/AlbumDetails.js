import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios'; // Your axios instance
import ReviewForm from '../components/ReviewForm';
import Layout from '../components/Layout';

const AlbumDetails = () => {
  const { id } = useParams(); // Get album ID from the URL
  const [album, setAlbum] = useState(null); // State to store album details
  const [artistName, setArtistName] = useState(''); // State to store artist's name
  const [reviews, setReviews] = useState([]); // State to store reviews
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error state

  useEffect(() => {
    // Fetch album and artist details from the backend
    const fetchAlbum = async () => {
      try {
        const albumResponse = await axios.get(`/albums/${id}?includeTracks=true`);
        const albumData = albumResponse.data;
        setAlbum(albumData);

        // Fetch the artist name using the artist_id from the album
        const artistResponse = await axios.get(`/artists/${albumData.artist_id}`);
        setArtistName(artistResponse.data.name);

        setLoading(false);
      } catch (err) {
        setError('Failed to load album details');
        setLoading(false);
      }
    };

    fetchAlbum();
  }, [id]);

  const handleReviewSubmit = (newReview) => {
    setReviews([...reviews, newReview]); // Add new review to the list
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <Layout>
      <div className="container mx-auto p-8 text-white">
        {album && (
          <>
            {/* Album Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex justify-center">
                <img 
                  src={album.cover_image ? album.cover_image : '/path-to-placeholder-image.jpg'} 
                  alt={album.title} 
                  className="rounded-lg shadow-lg w-full h-auto" 
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-5xl font-bold mb-4">{album.title}</h1>
                <p className="text-xl text-gray-400 mb-2">Artist: {artistName}</p>
                <p className="text-xl text-gray-400 mb-4">Released: {new Date(album.release_date).toLocaleDateString()}</p>

                {/* Album Description */}
                {album.description && (
                  <p className="text-lg text-gray-300 mb-6">{album.description}</p>
                )}

                {/* Tracklist */}
                {album.tracks && album.tracks.length > 0 && (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Tracklist</h2>
                    <ul className="list-disc pl-6 text-gray-300">
                      {album.tracks.map((track, index) => (
                        <li key={index} className="mb-2">{track.title}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* Review Form */}
            <ReviewForm onSubmit={handleReviewSubmit} />

            {/* Display Reviews */}
            <div className="mt-8">
              <h3 className="text-3xl font-bold mb-4">User Reviews</h3>
              {reviews.length > 0 ? (
                <ul className="space-y-4">
                  {reviews.map((review, index) => (
                    <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                      <p className="text-gray-300">{review.text}</p>
                      <p className="text-yellow-400 mt-2">Rating: {review.rating} Star{review.rating > 1 ? 's' : ''}</p>
                      <p className="text-gray-500 text-sm mt-2">{review.date}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">No reviews yet. Be the first to review this album!</p>
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default AlbumDetails;
