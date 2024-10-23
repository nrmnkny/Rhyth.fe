import React from 'react';
import { Link } from 'react-router-dom';

const ArtistCard = ({ artist }) => {
  const placeholderImage = '/path-to-placeholder-image.jpg'; // Fallback if no image is provided

  // Use artist.image if available, otherwise use placeholder
  const artistImage = artist.image ? artist.image : placeholderImage;

  return (
    <Link
      to={`/artists/${artist.id}`} // Link to individual artist page
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
    >
      <img
        src={artistImage}
        alt={artist.name}
        className="w-full h-64 object-cover rounded-md mb-4"
        onError={(e) => { e.target.src = placeholderImage; }} // Use placeholder if image fails to load
      />
      <h2 className="text-xl font-bold text-white">{artist.name}</h2>
    </Link>
  );
};

export default ArtistCard;
