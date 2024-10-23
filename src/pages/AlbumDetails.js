import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import ReviewForm from '../components/ReviewForm';
import ReviewCard from '../components/ReviewCard';
import TrackList from '../components/TrackList';
import Layout from '../components/Layout';

const AlbumDetails = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [artistName, setArtistName] = useState('');
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const albumResponse = await axios.get(`/albums/${id}?includeTracks=true`);
        const albumData = albumResponse.data;
        setAlbum(albumData);

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
    setReviews([...reviews, newReview]);
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <Layout>
      <div className="container mx-auto p-8 text-white">
        {album && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex justify-center">
                <img 
                  src={album.cover_image || '/path-to-placeholder-image.jpg'} 
                  alt={album.title} 
                  className="rounded-lg shadow-lg w-full h-auto" 
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-5xl font-bold mb-4">{album.title}</h1>
                <p className="text-xl text-gray-400 mb-2">Artist: {artistName}</p>
                <p className="text-xl text-gray-400 mb-4">Released: {new Date(album.release_date).toLocaleDateString()}</p>

                {album.description && (
                  <p className="text-lg text-gray-300 mb-6">{album.description}</p>
                )}

                {album.tracks && album.tracks.length > 0 && (
                  <TrackList tracks={album.tracks} />
                )}
              </div>
            </div>

            <ReviewForm onSubmit={handleReviewSubmit} />

            <div className="mt-8">
              <h3 className="text-3xl font-bold mb-4">User Reviews</h3>
              {reviews.length > 0 ? (
                <ul className="space-y-4">
                  {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
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
