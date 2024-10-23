import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Albums from './pages/Albums';
import AlbumDetails from './pages/AlbumDetails';
import Artists from './pages/Artists';
import ArtistDetails from './pages/ArtistDetails';
import AdminLogin from './admin/AdminLogin'; // Admin Login
import AdminDashboard from './admin/AdminDashboard'; // Admin Dashboard
import AdminAlbums from './admin/AdminAlbums';
import AdminArtists from './admin/AdminArtists';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute component

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/albums/:id" element={<AlbumDetails />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />

        {/* Admin Routes */}
        <Route path="/auth/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/albums"
          element={
            <PrivateRoute>
              <AdminAlbums />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/artists"
          element={
            <PrivateRoute>
              <AdminArtists />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
