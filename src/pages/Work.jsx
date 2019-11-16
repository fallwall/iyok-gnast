import React from 'react';
import Masonry from '../components/Masonry';
import Tile from '../components/Tile';

export default function Work() {

  const brakePoints = [500, 840, 1260];

  const images = [
    "https://i.imgur.com/TkjfZ3Q.jpg",
    "https://i.imgur.com/NHtImyj.jpg",
    "https://i.imgur.com/TkjfZ3Q.jpg",
    "https://i.imgur.com/TkjfZ3Q.jpg",
    "https://i.imgur.com/TkjfZ3Q.jpg",
    "https://i.imgur.com/TkjfZ3Q.jpg",
    "https://i.imgur.com/TkjfZ3Q.jpg",
    "https://i.imgur.com/NHtImyj.jpg",
    "https://i.imgur.com/NHtImyj.jpg",
  ];

  return (

    <div className="container">
      <div className="masonry-container">
        <p>Tile of some sort.</p>
        <Masonry brakePoints={brakePoints}>
          {images.map(image => <Tile src={image} />)}
        </Masonry>
      </div>
    </div>

  )
}
