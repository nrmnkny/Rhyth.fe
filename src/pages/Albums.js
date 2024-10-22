import AlbumCard from '../components/AlbumCard';
import Layout from '../components/Layout';

const Albums = () => {
  const albums = [
    { title: 'Album One', artist: 'Artist One', cover: 'cover-url-1' },
    { title: 'Album Two', artist: 'Artist Two', cover: 'cover-url-2' },
    { title: 'Album Three', artist: 'Artist Three', cover: 'cover-url-3' },
    { title: 'Album Four', artist: 'Artist Four', cover: 'cover-url-4' }
  ];

  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-white mb-6">Albums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {albums.map((album, index) => (
            <AlbumCard key={index} album={album} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Albums;
