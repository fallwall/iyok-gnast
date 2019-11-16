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

  // const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643];
  // for (let i = 0; i < imgId.length; i++) {
  //   const ih = 200 + Math.floor(Math.random() * 10) * 15;
  //   images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
  // }

  return (

    <div className="container">
      <div className="masonry-container">
        <p>Tile of some sort.</p>
        <Masonry brakePoints={brakePoints}>
          {images.map((image) => {
            return (
              <Tile src={image} />
            )
          })}
        </Masonry>
      </div>
    </div>

  )
}
