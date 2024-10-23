import React from 'react';
import ArtistCard from './ArtistCard';
import { Link } from 'react-router-dom';

const ArtistGrid = ({ artists }) => {
  return (
    <div className="container mx-auto p-8">
      <Link to="/" className="text-red-500 hover:underline">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-white mb-8">Artists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistGrid;
