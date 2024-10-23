import { useState, useEffect } from 'react';
import axios from '../api/axios'; // Use the axios instance you created

const AdminAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [title, setTitle] = useState('');
  const [artistId, setArtistId] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch albums for listing and selection
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('/albums'); // Fetch albums from backend API
        setAlbums(response.data.data); // Assuming the albums are in the 'data' field
      } catch (error) {
        setErrorMessage('Failed to fetch albums');
      }
    };

    fetchAlbums();
  }, []);

  // Handle the form submission for creating or updating albums
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { title, artistId, releaseDate, coverImage, description };
      if (selectedAlbum) {
        // Update existing album
        await axios.put(`/albums/${selectedAlbum.id}`, payload);
        setSuccessMessage('Album updated successfully');
      } else {
        // Create a new album
        await axios.post('/albums', payload);
        setSuccessMessage('Album added successfully');
      }

      setTitle('');
      setArtistId('');
      setReleaseDate('');
      setCoverImage('');
      setDescription('');
      setSelectedAlbum(null); // Reset selection after submit
    } catch (error) {
      setErrorMessage('Error saving album');
    }
  };

  // Select an album for updating
  const handleSelectAlbum = (album) => {
    setSelectedAlbum(album);
    setTitle(album.title);
    setArtistId(album.artist_id);
    setReleaseDate(album.release_date.split('T')[0]); // Formatting date for input
    setCoverImage(album.cover_image);
    setDescription(album.description);
  };

  // Delete an album
  const handleDeleteAlbum = async (id) => {
    try {
      await axios.delete(`/albums/${id}`);
      setSuccessMessage('Album deleted successfully');
      setAlbums(albums.filter((album) => album.id !== id)); // Remove from local state
    } catch (error) {
      setErrorMessage('Error deleting album');
    }
  };

  return (
    <div className="container mx-auto p-8 text-black">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Manage Albums</h1>
        {selectedAlbum && (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setSelectedAlbum(null)}
          >
            Add New Album
          </button>
        )}
      </div>

      {successMessage && <div className="text-green-400 mb-4">{successMessage}</div>}
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

      {/* Form for Creating/Updating Albums */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Album Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Artist ID</label>
          <input
            type="text"
            value={artistId}
            onChange={(e) => setArtistId(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Release Date</label>
          <input
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Cover Image URL</label>
          <input
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white rounded-lg"
        >
          {selectedAlbum ? 'Update Album' : 'Add Album'}
        </button>
      </form>

      {/* Album List for Selecting/Deleting */}
      <h2 className="text-xl font-semibold mt-8">Albums List</h2>
      <ul className="space-y-4">
        {albums.map((album) => (
          <li key={album.id} className="flex justify-between bg-gray-800 p-4 rounded-lg">
            <div>
              <p className="text-lg font-semibold">{album.title}</p>
              <p className="text-gray-400">Artist ID: {album.artist_id}</p>
              <p className="text-gray-400">Release Date: {album.release_date}</p>
            </div>
            <div className="space-x-4">
              <button
                onClick={() => handleSelectAlbum(album)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteAlbum(album.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminAlbums;
