import React from 'react'; 

const FeaturedAlbums = ({ albums }) => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4"> {/* Added px-4 for sharper horizontal margins */}
        <h2 className="text-4xl text-white font-bold mb-8 text-center">
          Featured Albums
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Reduced gap for tighter layout */}
          {albums.map((album) => (
            <div key={album.id} className="group relative album-hover">
              <img
                src={album.cover_image || '/path-to-placeholder-image.jpg'}
                alt={album.title}
                className="w-full h-64 object-cover album-cover shadow-lg rounded-lg transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-xl font-bold">{album.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedAlbums;
