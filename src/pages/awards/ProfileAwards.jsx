import React from 'react';
import Slider from 'react-slick';
import './ProfileAwards.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProfileAwards = ({ awards }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="profile-awards">
      <h2>Awards & Recognition</h2>
      <Slider {...settings}>
        {awards.map((award, index) => (
          <div key={index} className="award-card-wrapper">
            <div className="award-card">
              <img src={award.image} alt={award.ceremony} className="award-image" />
              <div className="award-info">
                <h4>{award.title}</h4>
                <p>{award.ceremony} ({award.year})</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProfileAwards;