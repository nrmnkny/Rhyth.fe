const AdminLogin = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-neon-blue text-3xl font-bold mb-6">Admin Login</h2>
          <div className="mb-4">
            <label className="block text-gray-400">Username</label>
            <input type="text" className="w-full p-2 bg-gray-700 text-white rounded" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400">Password</label>
            <input type="password" className="w-full p-2 bg-gray-700 text-white rounded" />
          </div>
          <button className="w-full py-2 bg-neon-blue text-black rounded hover:bg-purple-600">
            Login
          </button>
        </form>
      </div>
    );
  };
  
  export default AdminLogin;
  