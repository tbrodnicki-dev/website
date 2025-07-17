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
    <div className='main-content'>
      <h1>Hi, my name is Tyler!</h1>
      <p>I'm a Third-Year Computer Science student at the University of Florida! At my time at UF I've been apart of many organizations that have allowed me to freely practice my skills in Software Engineering!</p>
    </div>
    </>
  )
}

export default App
