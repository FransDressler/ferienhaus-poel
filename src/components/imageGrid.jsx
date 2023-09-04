import React from 'react';
import { SliderData } from './sliderData';
const ImageGrid = () => {
  return (
    <section className="image-grid">
         {SliderData.map((slide) => {
            return (
              <div className="">
                  <div className="hover-effect"><p className="text-dark fs-400 ff-sans-cond">Wort</p></div><img src={slide.image} alt='travel' className='grid-image' />
              </div>
            );
          })}
         </section>
  );

};

export default ImageGrid;