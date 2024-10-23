import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Admin Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to="/admin/albums"
            className="block p-6 bg-indigo-600 rounded-lg text-white text-center text-xl font-bold hover:bg-indigo-700 transition duration-300"
          >
            Manage Albums
          </Link>
          <Link
            to="/admin/artists"
            className="block p-6 bg-indigo-600 rounded-lg text-white text-center text-xl font-bold hover:bg-indigo-700 transition duration-300"
          >
            Manage Artists
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
