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
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/1.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/2.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/3.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/4.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/5.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/6.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/7.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/8.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/9.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/10.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/11.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/12.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/1.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/2.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/3.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/4.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/5.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/6.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/7.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/8.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/9.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/10.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/11.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/12.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/1.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/2.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/3.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/4.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/5.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/6.jpeg?raw=true", width: 1280, height: 853 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/7.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/8.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/9.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/10.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/11.jpeg?raw=true", width: 853, height: 1280 },
    { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/12.jpeg?raw=true", width: 1280, height: 853 },   
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
            { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/1.jpeg?raw=true",},
            { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/2.jpeg?raw=true",},
            { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/3.jpeg?raw=true",},
            { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/4.jpeg?raw=true",},
            { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/5.jpeg?raw=true",},
            { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/6.jpeg?raw=true",},
            { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/7.jpeg?raw=true",},
            { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/8.jpeg?raw=true",},
            { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/9.jpeg?raw=true",},
            { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/10.jpeg?raw=true"},
            { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/11.jpeg?raw=true"},
            { src: "https://github.com/tbrodnicki-dev/website/blob/main/public/12.jpeg?raw=true"},
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
