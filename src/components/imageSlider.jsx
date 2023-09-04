import React, { useState } from 'react';
import { SliderData } from './sliderData';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}

      <i className="fa fa-angle-left arrow text-white" onClick={prevSlide}></i>
      
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active h-[300px] lg:h-[700px] grid place-items-center w-[250px] lg:w-[450px]' : 'slide lg:h-[300px] lg:h-[700px] grid place-items-center'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel' className='object-center object-contain w-[250px] lg:w-[450px]' />
            )}
          </div>
        );
      })}

    <i className="fa fa-angle-right arrow text-white" onClick={nextSlide}></i>
    </section>
  );
};

export default ImageSlider;