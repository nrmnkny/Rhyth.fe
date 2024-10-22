import React from 'react';
import { Link } from 'react-router-dom';

const ArtistCard = ({ artist }) => {
  const placeholderImage = '/path-to-placeholder-image.jpg'; // Replace with your placeholder image path
  const artistImage = artist.image ? artist.image : placeholderImage; // Fallback to placeholder if no image

  return (
    <Link
      to={`/artists/${artist.id}`}
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
    >
      <img
        src={artistImage}
        alt={artist.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold text-white">{artist.name}</h2>
    </Link>
  );
};

export default ArtistCard;
