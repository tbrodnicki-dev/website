function About() {
  return (
    <>
    <div>
      <div className="title-bar">
        <h1>About Me</h1>
        <h2>Who am I?</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
        <p>Hello! I'm Tyler Brodnicki, I'm a Third-Year Computer Science student at the University of Florida. I've had a passion for technology and digital media since I was young, and have been working on this website
          as a personal project to showcase my passion and skills for both Digital Media and Software Engineering.</p>
        <p>Photography has always been a form of storytelling for me as I enjoy capturing specific moments in not only my life, but other peoples' lives! Being able to use this website as a form of storytelling, has allowed other people to
        view my moments and works of art that I call my portfolio.</p>
        <p>Feel free to reach out to me through the Contact page if you'd like to connect or collaborate!</p>
        <p>For my technical projects, check out my <a href="https://github.com/tbrodnicki-dev">GitHub</a> profile!</p>
        <p>The specifications for my camera gear are as follows:</p>
        <ul>
          <li>Camera Body: Sony A7 iii</li>
          <li>Lens: Sigma 70-200mm f/2.8 DG OS HSM</li>
          <li>Lens: Tamron 28-75mm f/2.8 Di III RXD</li>
          <li>Accessories: Meike MK A9 Vertical Battery Grip, Peak Design Slide, LowePro Tahoe BP150 </li>
          <li>Editing: Adobe Lightroom Classic and Photoshop</li>
        </ul>
        </div>
        <img src="https://github.com/tbrodnicki-dev/website/blob/main/public/7.jpeg?raw=true" alt="Tyler Brodnicki"></img>
      
      </div>
    </div>
    </>
  )
}

export default About
