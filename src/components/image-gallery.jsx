import React from 'react'
import ReactImageGallery from 'react-image-gallery'

import '../styles/image-gallery.scss'

import beach from '../img/beach.jpg'
import thumb_beach from '../img/thumb_beach.png'
import duck from '../img/duck.jpg'
import thumb_duck from '../img/thumb_duck.png'
import flower from '../img/flower.jpg'
import thumb_flower from '../img/thumb_flower.png'
import squirrel from '../img/squirrel.jpg'
import thumb_squirrel from '../img/thumb_squirrel.png'
import tower from '../img/tower.jpg'
import thumb_tower from '../img/thumb_tower.png'

const images = [
  { original: beach, thumbnail: thumb_beach },
  { original: duck, thumbnail: thumb_duck },
  { original: flower, thumbnail: thumb_flower },
  { original: squirrel, thumbnail: thumb_squirrel },
  { original: tower, thumbnail: thumb_tower },
];

const ImageGallery = () => {
  return (
    <div>
      <ReactImageGallery 
        items={images}
        fullscreen={true}
        showPlayButton={false}
        showNav={false}
        showFullscreenButton={false}
      />
    </div>
  )
}

export default ImageGallery