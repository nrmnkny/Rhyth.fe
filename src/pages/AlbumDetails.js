import { useState } from 'react';
import ReviewForm from '../components/ReviewForm';

const AlbumDetails = ({ album }) => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (newReview) => {
    setReviews([...reviews, newReview]); // Add the new review to the list
  };

  return (
    <div className="container mx-auto p-8 text-white">
      {/* Album Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <img src={album.cover} alt={album.title} className="rounded-lg shadow-lg w-full h-auto" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">{album.title}</h1>
          <p className="text-xl text-gray-400 mb-2">Artist: {album.artist}</p>
          <p className="text-xl text-gray-400 mb-4">Released: {album.releaseDate}</p>

          {/* Tracklist */}
          <h2 className="text-2xl font-semibold mb-4">Tracklist</h2>
          <ul className="list-disc pl-6 text-gray-300">
            {album.tracks.map((track, index) => (
              <li key={index} className="mb-2">{track}</li>
            ))}
          </ul>
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
    </div>
  );
};

export default AlbumDetails;
