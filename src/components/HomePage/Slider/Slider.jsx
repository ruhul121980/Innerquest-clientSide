import React from 'react';

export default function Slider() {
  return (
    <div className="carousel w-full max-h-96">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/Df0dWSK/pexels-cottonbro-4101143.jpg" className="w-full h-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/z4mzXp6/pexels-cottonbro-4098232.jpg" className="w-full h-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
    </div>
  );
}
