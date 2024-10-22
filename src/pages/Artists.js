import React from 'react';
import ArtistCard from '../components/ArtistCard';

const artists = [
  {
    id: 1,
    name: 'Artist One',
    image: '/path-to-artist-one-image.jpg', // Replace with actual path
  },
  {
    id: 2,
    name: 'Artist Two',
    image: '/path-to-artist-two-image.jpg', // Replace with actual path
  },
];

const Artists = () => {
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
