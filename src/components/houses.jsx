import React from 'react';
import ImageSlider from './imageSlider';
import ImageSliderSmall from './ImageSliderSmall';
import { SliderData } from './sliderData';
import { SliderDataHouse1 } from './sliderDataHouse1';
import { SliderDataHouse2 } from './sliderDataHouse2';


function Houses() {
  
  return (
    
    <div className="min-h-screen min-w-screen houses-container py-60 max-w-screen">
     <div className="shadow-foreground container-full ">
         <div className="container flex flex-col max-w-screen">
             
         
        <div className="flex lg:h-[100vh] items-center lg:items-start justify-center p-2 pt-20 w-full flex-wrap">
             <div className="flex flex-col lg:-mt-20 justify-center md:w-1/4 text-right h-full">
               <h2 className='fs-700 ff-sans-normal'>Unsere <br/> Traumferienhäuser</h2>
               <p className="fs-400 text-right">Erleben Sie unvergessliche Urlaubstage in unseren komfortablen Ferienhäusern auf der bezaubernden Insel Poel. Tauchen Sie ein in eine Welt der Entspannung und lassen Sie den Alltagsstress hinter sich.
               </p>
             </div>
                 <ImageSlider slides={SliderData} />
         
         </div>
         <div className="flex lg:h-[80vh] container justify-center items-center text-right flex-wrap ">
             <div className="flex flex-col justify-center text-right h-full mb-20">
               <h2 className='fs-700 ff-sans-normal'>Ferienhaus - "Einfach schön"</h2>
               <p className="fs-400 text-left text-lg w-full my-3">Zum Reetmoor 21<br/>23999 Insel Poel<br/>OT Schwarzer Buch</p>
               <p className="fs-400 text-left text-lg w-full">
                Informationen:
                <ul className="list-disc">
                  <li className="ml-7">2 Schlafzimmer (3 Betten)</li>
                  <li className="ml-7">110qm</li>
                  <li className="ml-7">max. Anzahl an Personen: 5</li>
                </ul>
               </p>
             </div>
             <div>
               <ImageSliderSmall slides={SliderDataHouse1} />
             </div>
        </div>
         </div>
         <div className="flex lg:h-[80vh] container items-center text-left justify-center lg:justify-left  items-start pt-5 flex-wrap-reverse mb-[20rem]" style={{marginBottom: "3rem"}}>
         <div>
           <ImageSliderSmall slides={SliderDataHouse2} />
         </div>
         <div className="flex flex-col justify-center text-left backdrop-blur-sm p-3">
               <h2 className='fs-700 ff-sans-normal '>Ferienhaus - "Peuler Insel Leiw"</h2>
               <p className="fs-400 text-left text-lg w-full my-3">Fährdorf-Ausbau 7a<br/>23966 Insel Poel<br/>OT Fährdorf-Ausbau</p>
               <p className="fs-400 text-left text-lg w-full">
                Informationen:
                <ul className="list-disc">
                  <li className="ml-7">3 Schlafzimmer (4 Betten)</li>
                  <li className="ml-7">90qm</li>
                  <li className="ml-7">maximale Anzahl an Personen: 6</li>
                </ul>
               </p>
             </div>
                 
            </div>
         </div>
     </div>




  );
}

export default Houses;