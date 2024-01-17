
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import image1 from './public/image1.jpg';
import image2 from './public/image2.jpg';
import image3 from './public/image3.jpg';
import image4 from './public/image4.jpg';
import img3 from './public/images/about_kle_img3.png';
import img4 from './public/images/about_kle_img4.png';
import img5 from './public/images/about_kle_img5.png';
import img6 from './public/images/about_kle_img6.png';
import img7 from './public/images/about_kle_img7.png';
import img8 from './public/images/about_kle_img8.png';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { src: image1, caption: 'BVB College in Night' },
    { src: image2, caption: 'Amaan Khan ribbon ceremony with VC' },
    { src: image3, caption: 'B div CR getting best division Award' },
    { src: image4, caption: 'Sab Moh Mayaa hai' },
  ];
useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);
 document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
  return (
    <div className="home-page">
      <div className="slideshow">
      <div className="button-container">
          <button className="previous" onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>
            Previous
          </button>
          <button className="next" onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)}>
            Next
          </button>
        </div>

        <img src={images[currentImageIndex].src} alt="" />
        <p className="caption">{images[currentImageIndex].caption}</p>
      </div>
{/* from here */}
<div className='About-clg'><p>KLE Technological University (KLE Tech) has its roots in one of the premier engineering institutions of Karnataka, B. V. Bhoomaraddi
 College of Engineering and Technology (BVB), a prestigious engineering college in Hubballi.The founding organization KLE Society, Belgaum,
  established BVB College in 1947 to create an institution that would lay the foundation of modern engineering education in the northern region
   of Karnataka.</p></div>
<div class="ranking">
    <section>
      <h2>Ranking &
Recognition</h2>
      
    </section><div class="vertical-line"></div>
    <section>
      <img src={img3} alt="Line Image 1"/>
    </section>
    <section>
      <img src={img4} alt="Line Image 2"/>
    </section>
    <section>
      <img src={img5}  alt="Line Image 3"/>
    </section>
    <section>
      <img src={img6}  alt="Line Image 4"/>
    </section>
    <section>
      <img src={img7}  alt="Line Image 5"/>
    </section>
    <section>
      <img src={img8}  alt="Line Image 6"/>
    </section>
  </div>

      <div className="bottom-sections">
        <div className="section grey-background">
          <h2>About KLE Tech</h2>
          <ul>
            <li><Link to="/overview">Overview</Link></li>
            <li><Link to="/kle-society">KLE Society</Link></li>
            <li><Link to="/chancellor-message">Chancellor’s Message</Link></li>
            <li><Link to="/vice-chancellor-message">Vice Chancellor’s Message</Link></li>
            <li><Link to="/board-of-governors">Board of Governors</Link></li>
            <li><Link to="/recognitions-approvals">Recognitions & Approvals</Link></li>
            <li><Link to="/mandatory-disclosures">Mandatory Disclosures</Link></li>
          </ul>
        </div>

        <div className="section grey-background">
          <h2>Campus-life</h2>
          <ul>
            <li><Link to="/academic-facilities">Academic Facilities</Link></li>
            <li><Link to="/on-campus-facilities">On Campus Facilities</Link></li>
            <li><Link to="/sports-health">Sports and Health</Link></li>
            <li><Link to="/social-life">Social Life</Link></li>
          </ul>
        </div>

        <div className="section grey-background">
        <br /><br /><br /><br /><br />
          <p>© Copyright 2024 - KLE Technological University. All Rights Reserved. Website Design and Development by Team Shadow.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
