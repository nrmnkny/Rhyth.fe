import { Link } from 'react-router-dom';

const AlbumCard = ({ album, id }) => {
  return (
    <Link to={`/albums/${id}`} className="relative bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        src={album.cover}
        alt={album.title}
        className="w-full h-64 object-cover rounded-md mb-4 transition-opacity duration-300"
      />
      <h3 className="text-white text-xl font-bold">{album.title}</h3>
      <p className="text-gray-400">{album.artist}</p>
    </Link>
  );
};

export default AlbumCard;
