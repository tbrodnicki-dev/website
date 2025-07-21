import { useState } from 'react'
import './index.css'
import Particles from './Particles';


function App() {
  const [count, setCount] = useState(0)
  const items = [
  ];
  

  return (
    <>
    <div style={{ width: '100vw', height: '100vh', position: 'fixed' }}>
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={1000}
        particleSpread={30}
        speed={0.2}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>
    <div className='front-splash'>
      <h1>Tyler Brodnicki</h1>
      <h2>Software Engineering Student</h2>
    </div>
    <div className='experience'>
        <h1>Experience</h1>
    </div>
    </>
  )
}

export default App
