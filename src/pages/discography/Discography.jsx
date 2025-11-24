import React, { useState, useEffect } from 'react';

const sampleTracks = {
  "Starlight Serenade": ["1. Starlight Prelude", "2. Galactic Tides", "3. Nebula's Embrace", "4. Supernova Heart", "5. Echoes of Infinity"],
  "Lunar Lullaby": ["1. Moonbeam Melody", "2. Cosmic Dust", "3. Echoes of the Void", "4. Stellar Bloom", "5. Galactic Whisper"],
  "Cosmic Rhapsody": ["1. Nebula's Dance", "2. Quantum Leap", "3. Celestial Drift", "4. Astral Echoes", "5. Infinite Horizon"],
  "Dream Weaver": ["1. Whispering Winds", "2. Silent Stars", "3. Fading Light", "4. Dreamscape", "5. Eternal Slumber"],
  "Galactic Harmonies": ["1. Pulsar Beat", "2. Solar Flare", "3. Andromeda's Song", "4. Milky Way Groove", "5. Cosmic Symphony"],
  "Ethereal Journey": ["1. Ancient Paths", "2. Spirit's Flight", "3. Sacred Grove", "4. Timeless River", "5. Soul's Ascent"]
};

const Discography = ({ albums, initialSelectedAlbumSeq }) => {
  const [selectedAlbumSeq, setSelectedAlbumSeq] = useState(initialSelectedAlbumSeq);

  
  useEffect(() => {
    setSelectedAlbumSeq(initialSelectedAlbumSeq);
  }, [initialSelectedAlbumSeq]);

  const currentSelectedAlbum = albums.find(album => album.seq === selectedAlbumSeq);
  const currentSelectedAlbumTitle = currentSelectedAlbum ? currentSelectedAlbum.title : null;

  const handleAlbumClick = (seq) => {
    setSelectedAlbumSeq(selectedAlbumSeq === seq ? null : seq);
  };

  return (
    <section className="profile-albums">
      <h2>Discography</h2>
      <div className="discography-layout">
        <div className="album-list-vertical">
          {albums.map(album => (
            <div
              key={album.seq} 
              className={`album-card-vertical ${selectedAlbumSeq === album.seq ? 'active' : ''}`} // selectedAlbumSeq¿Í ºñ±³
              onClick={() => handleAlbumClick(album.seq)} 
            >
              <img src={album.cover} alt={album.title} className="album-cover-small" />
              <div className="album-info-vertical">
                <h4>{album.title}</h4>
                <p>{album.year}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`track-list-details ${currentSelectedAlbumTitle ? 'show' : ''}`}>
          {currentSelectedAlbumTitle && (
            <>
              <h3>{currentSelectedAlbumTitle}</h3>
              <ul>
                {sampleTracks[currentSelectedAlbumTitle]?.map((track, index) => (
                  <li key={index}>{track}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Discography;