import { useState } from 'react'
import { RowsPhotoAlbum } from 'react-photo-album'
import "react-photo-album/rows.css"
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Fullscreen, Zoom, Share } from 'yet-another-react-lightbox/plugins'

function Home() {
  const [index, setIndex] = useState(-1)
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
  ]

  return (
    <>


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
          onClick={({ index: current }) => setIndex(current)}
        />
        <Lightbox
          slides={photos}
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Share]}
        />
      </div>

      <div className="footer">
        <p>© 2026 Tyler Brodnicki. All rights reserved.</p>
      </div>
    </>
  )
}

export default Home
