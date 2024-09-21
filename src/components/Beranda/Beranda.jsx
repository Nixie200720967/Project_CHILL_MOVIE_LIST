import React, { useEffect, useState } from 'react';
import './Beranda.css';

const Beranda = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        const links = navbar.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() {
                const current = document.getElementsByClassName('active');
                if (current.length > 0) {
                    current[0].classList.remove('active');
                }
                this.classList.add('active');
            });
        }

        const soundButton = document.getElementById("sound-button");
        const soundIcon = document.getElementById("sound-icon");
        soundButton.addEventListener("click", function() {
            if (soundIcon.src.includes("sound-icon.png")) {
                soundIcon.src = "assets/sound-icon-mute.png";
            } else {
                soundIcon.src = "assets/sound-icon.png";
            }
        });

        // Carousel functionality
        document.querySelectorAll('.carousel').forEach(carousel => {
            const track = carousel.querySelector('.carousel-track');
            const slides = Array.from(track.children);
            const nextButton = carousel.querySelector('.nextBtn');
            const prevButton = carousel.querySelector('.prevBtn');
            const slideWidth = slides[0].getBoundingClientRect().width;

            const setSlidePosition = (slide, index) => {
                slide.style.left = slideWidth * index + 'px';
            };
            slides.forEach(setSlidePosition);

            const moveToSlide = (track, currentSlide, targetSlide) => {
                track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
                currentSlide.classList.remove('current-slide');
                targetSlide.classList.add('current-slide');
            };

            prevButton.addEventListener('click', e => {
                const currentSlide = track.querySelector('.current-slide');
                const prevSlide = currentSlide.previousElementSibling;
                if (prevSlide) {
                    moveToSlide(track, currentSlide, prevSlide);
                }
            });

            nextButton.addEventListener('click', e => {
                const currentSlide = track.querySelector('.current-slide');
                const nextSlide = currentSlide.nextElementSibling;
                if (nextSlide) {
                    moveToSlide(track, currentSlide, nextSlide);
                }
            });
        });
    }, []);

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
                                <li className="lih"><a href="default.asp" className="active">Series</a></li>
                                <li className="lih"><a href="film.asp">Film</a></li>
                                <li className="lih"><a href="daftar-saya.asp">Daftar Saya</a></li>
                            </ul>
                        </div>
                        <div className="profile">
                            <img 
                                src="./serc/assets/user-profile.png" 
                                alt="User Profile" 
                                className="profile-icon"
                                onClick={() => setDropdownVisible(!dropdownVisible)}
                            />
                            {dropdownVisible && (
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

            {/* Main content */}
            <div className="container-main-topic">
                <img src="assets/img/dutyafterschool.png" alt="Snow" className="responsive-img" />
                <div className="container-main-text">
                    {/* Genre dropdown, main text, and buttons */}
                </div>
            </div>

            {/* Carousels */}
            <div className="carousel-container">
                {/* Melanjutkan Tonton Film */}
                {/* Top Rating Film dan Series Hari ini */}
                {/* Film Trending */}
                {/* Rilis Baru */}
            </div>

            <footer>
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default Beranda;