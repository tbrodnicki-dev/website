import { useState } from 'react'
import { RowsPhotoAlbum } from 'react-photo-album';
import "react-photo-album/rows.css"
import Lightbox  from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './index.css'
import Particles from './Particles';
import { Counter, Fullscreen, Inline, Share, Zoom } from 'yet-another-react-lightbox/plugins';

function ParticlesShowcase() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed' }}>
      <Particles
        particleColors={['#ffffffff', '#ffffffff']}
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
  

  return (
    <>
    <ParticlesShowcase />
    <div className ='nav-bar'>
      <h1>Tyler Brodnicki</h1>
      <h2>Portfolio</h2>
    </div>
    <RowsPhotoAlbum 
      photos={photos}
      spacing={10}
      padding={10}
      rowConstraints={{ singleRowMaxHeight: 350 }}
      onClick={({ index }) => setIndex(index)} />
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
    </>
  )
}

export default App
