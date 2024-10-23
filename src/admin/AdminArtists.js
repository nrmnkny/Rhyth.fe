import { useState, useEffect } from 'react';
import axios from '../api/axios'; // Use the axios instance

const AdminArtists = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [artistId, setArtistId] = useState(null);

  // Fetch all artists on component mount
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get('/artists'); // Fetch all artists from the API
        setArtists(response.data);
        setLoading(false);
      } catch (error) {
        setErrorMessage('Failed to load artists');
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  // Handle form submission for adding/editing artists
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editMode) {
        // Update artist
        await axios.put(`/artists/${artistId}`, {
          name,
          bio,
          image,
        });
        setSuccessMessage('Artist updated successfully');
        // Refetch artists to update UI after editing
        const response = await axios.get('/artists');
        setArtists(response.data);
      } else {
        // Add new artist
        await axios.post('/artists', {
          name,
          bio,
          image,
        });
        setSuccessMessage('Artist added successfully');
        // Refetch artists to update UI after adding
        const response = await axios.get('/artists');
        setArtists(response.data);
      }

      setErrorMessage('');
      setName('');
      setBio('');
      setImage('');
      setEditMode(false); // Reset the form from edit mode
      setArtistId(null); // Reset the artist ID after edit
    } catch (error) {
      console.error('Error:', error); // Log the error for debugging
      setErrorMessage('Error saving artist: ' + (error.response?.data?.message || error.message));
      setSuccessMessage('');
    }
  };

  // Handle artist deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/artists/${id}`);
      setSuccessMessage('Artist deleted successfully');
      setArtists(artists.filter((artist) => artist.id !== id)); // Remove from state
    } catch (error) {
      console.error('Error:', error); // Log the error for debugging
      setErrorMessage('Failed to delete artist: ' + (error.response?.data?.message || error.message));
    }
  };

  // Populate the form for editing
  const handleEdit = (artist) => {
    setName(artist.name);
    setBio(artist.bio);
    setImage(artist.image);
    setArtistId(artist.id);
    setEditMode(true); // Switch to edit mode
  };

  return (
    <div className="container mx-auto p-8 text-black">
      <h1 className="text-3xl font-bold mb-6">Manage Artists</h1>
      
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

      {/* Add/Edit Artist Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-semibold">Artist Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
        >
          {editMode ? 'Update Artist' : 'Add Artist'}
        </button>
      </form>

      {/* Display Existing Artists */}
      <h2 className="text-xl font-bold mb-4">Existing Artists</h2>
      {loading ? (
        <div>Loading...</div>
      ) : artists.length === 0 ? (
        <div className="text-white">No artists available</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {artists.map((artist) => (
            <div key={artist.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold">{artist.name}</h3>
              <p className="text-gray-400 mb-2">{artist.bio}</p>
              {artist.image ? (
                <img src={artist.image} alt={artist.name} className="mb-4 w-full h-64 object-cover rounded" />
              ) : (
                <div className="mb-4 w-full h-64 bg-gray-700 flex items-center justify-center rounded">
                  <span className="text-white">No Image Available</span>
                </div>
              )}
              <button
                onClick={() => handleEdit(artist)}
                className="bg-yellow-600 text-white px-4 py-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(artist.id)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminArtists;
