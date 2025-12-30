import { useState } from 'react'
import { RowsPhotoAlbum } from 'react-photo-album';
import "react-photo-album/rows.css"
import Lightbox  from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './index.css'
import ColorBends from './ColorBends';



import { Counter, Fullscreen, Inline, Share, Zoom } from 'yet-another-react-lightbox/plugins';

function ParticlesShowcase() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed' }}>
      <Particles
        particleCount={1000}
        particleSpread={30}
        speed={0.2}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>
  )
}

function App() {
  const [index, setIndex] = useState(-1);
  const photos = [
    { src: "/1.jpeg", width: 1280, height: 853 },
    { src: "/2.jpeg", width: 1280, height: 853 },
    { src: "/3.jpeg", width: 853, height: 1280 },
    { src: "/4.jpeg", width: 1280, height: 853 },
    { src: "/5.jpeg", width: 853, height: 1280 },
    { src: "/6.jpeg", width: 1280, height: 853 },
    { src: "/7.jpeg", width: 853, height: 1280 },
    { src: "/8.jpeg", width: 853, height: 1280 },
    { src: "/9.jpeg", width: 853, height: 1280 },
    { src: "/10.jpeg", width: 853, height: 1280 },
    { src: "/11.jpeg", width: 853, height: 1280 },
    { src: "/12.jpeg", width: 1280, height: 853 },   
  ];

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];





  

  return (
    <>
    <ColorBends
      rotation={0}
      speed={.2}
      scale={.9}
      frequency={1}
      warpStrength={1}
      mouseInfluence={1}
      parallax={0}
      transparent = {false}
    />
    <div className="nav-bar">
      <ul>
        <li>
          Home
        </li>
        <li>
          Contact
        </li>
        <li>
          About
        </li>
      </ul>
    </div>
    <div className="title-bar">
      <h1>Tyler Brodnicki</h1>
      <h2>Photographer</h2>
      <h3>Gallery</h3>
      {/*<h2>"Life is like a camera. Focus on what's important, capture the good times, develop from the negatives, and if things don't work out, take another shot."</h2>*/}
    </div>
    <div className='content'>
      <RowsPhotoAlbum 
        photos={photos}
        spacing={15}
        rowConstraints={{ singleRowMaxHeight: 350 }}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
          slides={[
            { src: "/1.jpeg"},
            { src: "/2.jpeg"},
            { src: "/3.jpeg"},
            { src: "/4.jpeg"},
            { src: "/5.jpeg"},
            { src: "/6.jpeg"},
            { src: "/7.jpeg"},
            { src: "/8.jpeg"},
            { src: "/9.jpeg"},
            { src: "/10.jpeg"},
            { src: "/11.jpeg"},
            { src: "/12.jpeg"},
          ]}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Zoom, Share]}
      />
    </div>
    <div className="footer">
      <p>© 2026 Tyler Brodnicki. All rights reserved.</p>
    </div>
    </>
  )
}

export default App
