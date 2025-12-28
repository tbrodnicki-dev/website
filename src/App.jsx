import { useState } from 'react'
import { RowsPhotoAlbum } from 'react-photo-album';
import "react-photo-album/rows.css"
import './index.css'
import Particles from './Particles';

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
  const [count, setCount] = useState(0)
  const photos = [
  { src: "public/test1.jpg", width: 800, height: 600 },
  { src: "public/test2.jpg", width: 1000, height: 1333 },
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
    rowConstraints={{ singleRowMaxHeight: 350 }} />;
    </>
  )
}

export default App
