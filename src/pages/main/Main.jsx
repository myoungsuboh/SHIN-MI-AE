import React from 'react';
import Slider from 'react-slick';
import About from '@/pages/about/About';
import ProfileAwards from '@/pages/awards/ProfileAwards';
import Discography from '@/pages/discography/Discography';
import SocialMedia from '@/pages/socialMedia/SocialMedia';
import introImage0 from '@/assets/introImage_0.png';
import introImage1 from '@/assets/introImage_1.png';
import introImage2 from '@/assets/introImage_2.png';

import '../main/Main.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const singerData = {
  name: "SHIN MI AE",
  genre: "Synth-Pop & Ethereal Wave",
  bio: "SHIN MI AE is a solo artist known for her celestial voice and dreamy soundscapes. Blending synth-pop with ethereal wave, her music transports listeners to another dimension. From humble beginnings, she has risen to international acclaim, captivating audiences with her mesmerizing performances. Her journey began with a deep fascination for the electronic music of the 80s and the ambient textures of contemporary artists. This unique combination has shaped her signature sound, which is both nostalgic and futuristic. SHIN MI AE believes that music is a bridge to the unseen, a way to explore the depths of human emotion and the mysteries of the cosmos.",
  sliderImages: [
    introImage0,
    introImage1,
    introImage2
  ],
  stats: {
    albums: 5,
    followers: "3.2M",
    monthlyListeners: "15M"
  },
  albums: [
    { seq: 0, title: "Starlight Serenade", year: "2025", cover: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop"},
    { seq: 1, title: "Lunar Lullaby", year: "2024", cover: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop"},
    { seq: 2, title: "Cosmic Rhapsody", year: "2023", cover: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop"},
    { seq: 3, title: "Dream Weaver", year: "2022", cover: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop"},
    { seq: 4, title: "Galactic Harmonies", year: "2021", cover: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop"},
    { seq: 5, title: "Ethereal Journey", year: "2020", cover: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop"},
  ],
  awards: [
    { year: "2025", title: "Artist of the Year", ceremony: "Global Music Awards", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop" },
    { year: "2024", title: "Best Female Vocalist", ceremony: "Pop Excellence Awards", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop" },
    { year: "2023", title: "Album of the Year (Celestial Echo)", ceremony: "Music Critics' Choice", image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2070&auto=format&fit=crop" },
    { year: "2022", title: "Breakthrough Artist", ceremony: "New Talent Showcase", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop" },
    { year: "2021", title: "Best Live Performance", ceremony: "Stage Presence Awards", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop" },
    { year: "2020", title: "Fan Favorite Artist", ceremony: "Audience Choice Awards", image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2070&auto=format&fit=crop" },
  ],
  socials: {
    youtube: "https://youtube.com/channel/UCpJRX-k8FNgsy78rGGcV4Lg?si=pou3DUSDLRm4ybTJ",
    instagram: "https://www.instagram.com/mwesin/"
  }
};

const Main = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="profile-container">
      <div className="initial-view">
        <header className="profile-header">
          <Slider {...sliderSettings} className="header-slider">
            {singerData.sliderImages.map((img, index) => (
              <div key={index} className="slider-image-container">
                <img src={img} alt={`${singerData.name} intro image ${index + 1}`} className="slider-image" />
              </div>
            ))}
          </Slider>
          <div className="header-overlay">
            <h1 className="singer-name">{singerData.name}</h1>
            <p className="singer-genre">{singerData.genre}</p>
          </div>
        </header>
        <main className="profile-main">
          <About bio={singerData.bio} />
          
          <section className="profile-stats">
            <div className="stat-item">
              <h3>{singerData.stats.albums}</h3>
              <p>Albums</p>
            </div>
            <div className="stat-item">
              <h3>{singerData.stats.followers}</h3>
              <p>Followers</p>
            </div>
            <div className="stat-item">
              <h3>{singerData.stats.monthlyListeners}</h3>
              <p>Listeners</p>
            </div>
          </section>
        </main>
      </div>
      <main className="profile-main profile-main-continued">
        <Discography albums={singerData.albums} />

        <ProfileAwards awards={singerData.awards} />

        <SocialMedia socials={singerData.socials} />
      </main>

      <footer className="profile-footer">
        <p>&copy; {new Date().getFullYear()} {singerData.name} Music. All Rights Reserved.</p>
      </footer>
    </div>
  );
};


export default Main;