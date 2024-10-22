import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Albums from './pages/Albums';
import Artists from './pages/Artists';
import AlbumDetails from './pages/AlbumDetails';
import ArtistDetails from './pages/ArtistDetails';

function App() {
  const sampleAlbum = {
    title: 'Sample Album',
    artist: 'Sample Artist',
    releaseDate: '2023-01-01',
    cover: '/path-to-cover-image.jpg',
    tracks: ['Track 1', 'Track 2', 'Track 3'],
  };

  const sampleArtist = {
    name: 'Sample Artist',
    bio: 'This is a sample artist biography...',
    image: '/path-to-artist-image.jpg',
    albums: ['Album 1', 'Album 2', 'Album 3'],
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/albums/:id" element={<AlbumDetails album={sampleAlbum} />} />
        <Route path="/artists/:id" element={<ArtistDetails artist={sampleArtist} />} />
      </Routes>
    </Router>
  );
}

export default App;
