import React, { useState } from 'react';


const ImageSliderSmall = ({ slides }) => {
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
      
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active h-[300px] md:h-[400px] lg:h-[500px]  grid place-items-center w-[250px] md:w-[400px] lg:w-[450px]' : 'slide md:h-[400px] h-[300px] lg:h-[500px] grid place-items-center'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel' className='object-center object-contain w-[250px] md:w-[400px]  max-h-[300px] md:max-h-[400px] lg:max-h-[500px] lg:w-[450px]' />
            )}
          </div>
        );
      })}

    <i className="fa fa-angle-right arrow text-white" onClick={nextSlide}></i>
    </section>
  );
};

export default ImageSliderSmall;