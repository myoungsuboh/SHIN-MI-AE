import React from 'react';

const ProfileAlbums = ({ albums }) => {
  return (
    <section className="profile-albums">
      <h2>? Discography</h2>
      <div className="album-list">
        {albums.map(album => (
          <div key={album.title} className="album-card">
            <img src={album.cover} alt={album.title} />
            <div className="album-info">
              <h3>{album.title}</h3>
              <p>{album.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileAlbums;