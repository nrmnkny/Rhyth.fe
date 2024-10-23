import React from 'react';

const TrackList = ({ tracks }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Tracklist</h2>
      <ul className="list-disc pl-6 text-gray-300">
        {tracks.map((track, index) => (
          <li key={index} className="mb-2">{track.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
