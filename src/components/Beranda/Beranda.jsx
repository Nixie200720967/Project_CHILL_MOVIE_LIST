import React, { useState, useEffect } from 'react';
import './Beranda.css';

const Beranda = () => {
  const [activeNavItem, setActiveNavItem] = useState('Series');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showGenreDropdown, setShowGenreDropdown] = useState(false);

  const navItems = ['Series', 'Film', 'Daftar Saya'];

  const genreItems = [
    'Aksi', 'Anak-anak', 'Anime', 'Britania', 'Drama', 
    'Fantasi Ilmiah & Fantasi', 'Kejahatan', 'KDrama', 'Komedi', 
    'Petualangan', 'Perang', 'Romantis', 'Sains & Alam', 'Thriller'
  ];

  const carouselData = [
    { 
      title: "Melanjutkan Tonton Film", 
      items: [
        { img: "assets/1-DontLookUp.png", title: "Don't Look Up", rating: 4.5 },
        { img: "assets/2-TheBatman.png", title: "The Batman", rating: 4.5 },
        { img: "assets/3-Bluelock.png", title: "Blue Lock", rating: 4.5 },
        { img: "assets/4-Otto.png", title: "A Man Called Otto", rating: 4.5 },
      ]
    },
    { 
      title: "Top Rating Film dan Series Hari ini", 
      items: [
        { img: "assets/5-Suzume.png", title: "Suzume", rating: 4.5 },
        { img: "assets/6-JurrassicWorld.png", title: "Jurrassic World", rating: 4.5 },
        { img: "assets/7-Sonic2.png", title: "Sonic 2", rating: 4.5 },
        { img: "assets/8-BigHero6.png", title: "Big Hero 6", rating: 4.5 },
      ]
    },
    { 
      title: "Film Trending", 
      items: [
        { img: "assets/1-DontLookUp.png", title: "Don't Look Up", rating: 4.5 },
        { img: "assets/2-TheBatman.png", title: "The Batman", rating: 4.5 },
        { img: "assets/3-Bluelock.png", title: "Blue Lock", rating: 4.5 },
        { img: "assets/4-Otto.png", title: "A Man Called Otto", rating: 4.5 },
      ]
    },
    { 
      title: "Rilis Baru", 
      items: [
        { img: "assets/5-Suzume.png", title: "Suzume", rating: 4.5 },
        { img: "assets/6-JurrassicWorld.png", title: "Jurrassic World", rating: 4.5 },
        { img: "assets/7-Sonic2.png", title: "Sonic 2", rating: 4.5 },
        { img: "assets/8-BigHero6.png", title: "Big Hero 6", rating: 4.5 },
      ]
    },
  ];

  const Carousel = ({ title, items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    };

    return (
      <div className="carousel-container">
        <h2>{title}</h2>
        <div className="carousel">
          <button className="carousel-button left" onClick={prevSlide}>
            &lt;
          </button>
          <div className="carousel-track-container">
            <ul className="carousel-track" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
              {items.map((item, index) => (
                <li key={index} className={`carousel-slide ${index === currentIndex ? 'current-slide' : ''}`}>
                  <img src={item.img} alt={item.title} />
                  <div className="rating-content">
                    <p>{item.title}</p>
                    <p>⭐ {item.rating}/5</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button className="carousel-button right" onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <header>
        <nav>
          <div className="nav-container">
            <div className="left-section">
              <div className="logo">
                <img src="assets/director-logo.svg" alt="Chill Logo" />
                <h1>CHILL</h1>
              </div>
              <ul id="navbar">
                {navItems.map((item) => (
                  <li key={item} className="lih">
                    <a
                      href="#"
                      className={activeNavItem === item ? 'active' : ''}
                      onClick={() => setActiveNavItem(item)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="profile">
              <img
                src="assets/user-profile.png"
                alt="User Profile"
                className="profile-icon"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="dropdown">
                  <a href="profile.asp">Profil Saya</a>
                  <a href="settings.asp">Ubah Premium</a>
                  <a href="index.html">Keluar</a>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      <div className="container-main-topic">
        <img src="assets/img/dutyafterschool.png" alt="Duty After School" className="responsive-img" />
        <div className="container-main-text">
          <div className="genre-dropdown">
            <button 
              className="genre-button" 
              onClick={() => setShowGenreDropdown(!showGenreDropdown)}
            >
              Genre &#9662;
            </button>
            {showGenreDropdown && (
              <div className="genre-content">
                {genreItems.map((genre, index) => (
                  <a key={index} href="#">{genre}</a>
                ))}
              </div>
            )}
          </div>
          <div className="das">Duty After School</div>
          <br />
          <div className="text-des">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
            <div className="action-buttons">
              <button className="start-button">Mulai</button>
              <button className="more-info-button">Selengkapnya</button>
              <div className="age-rating">18+</div>
              <button className="sound-button" onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? "🔇" : "🔊"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {carouselData.map((carousel, index) => (
        <Carousel key={index} title={carousel.title} items={carousel.items} />
      ))}

      <footer>
        <div className="container-footer">
          <div className="container-footer-main">
            <div className="chil-footer">
              <img src="assets/Logo.png" alt="Chill Logo" />
              <p>@2023 Chill All Rights Reserved.</p>
            </div>
            <div className="Genre">
              <div className="information-footer">
                <div className="genre"><h4>Genre</h4></div>
                <ul>
                  {genreItems.slice(0, 7).map((genre, index) => (
                    <li key={index}><a href="#">{genre}</a></li>
                  ))}
                </ul>
                <ul>
                  {genreItems.slice(7).map((genre, index) => (
                    <li key={index}><a href="#">{genre}</a></li>
                  ))}
                </ul>
                <div className="genre"><h4>Bantuan</h4></div>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Syarat & Ketentuan</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Beranda;