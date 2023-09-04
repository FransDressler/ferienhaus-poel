import React from 'react';

function Home() {
  return (
    <div>
      <div className='background-image home-container pt-5'>
        <div className="white-border">
          <h1 className="fs-700 ff-sans-normal">Willkommen auf der <br /><span className="hero-span letter-spacing-1 ff-serif fs-900">Insel Poel</span></h1>
          <a href="/buchen" className="hero-button fs-400 ff-sans-normal">
             {/* <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg> */}
            <i className="fa-solid fa-compass fa-2x"></i>
            <span className="fs-500 ">Jetzt Buchen!</span>
          </a>
        </div>
      </div>
      <section className="home-container" id="home-about">
      <div className="gradient-overlay">
        <div className="container">
          <h2 className="fs-800 ff-sans-normal">Über uns</h2>
          <p className="paragraph">
                  Willkommen auf der Insel Poel. Wir freuen uns, Ihnen zwei einzigartige Ferienhäuser auf dieser wunderschönen norddeutschen Insel präsentieren zu können - Egal, ob Sie eine erholsame Auszeit mit der Familie oder einen romantischen Urlaub zu zweit planen.
            </p>
            <button class="home-about-btn text-white">
              <a className="fs-500 ff-sans-normal text-amber-900 capitalize " href="/häuser">Häuser besichtigen  <i class="fa fa-arrow-right"></i></a>
            </button>
        </div>
      </div>
      </section>
      {/* <div className="home-container bg-dark padd-0">
        <div>
          <div className="irr-squ-head">
              <h2 className="fs-800 ff-sans-normal">Über uns</h2>
          </div>
          <div className="flex">
            <div className="home-image-1"></div>
            <div className="vertival-polygon"></div>
            <div className="paragraph">
              Willkommen auf der Homepage der Ferienhäuser Insel Poel! Wir freuen uns, Ihnen zwei einzigartige Ferienhäuser auf dieser wunderschönen norddeutschen Insel präsentieren zu können. Egal, ob Sie eine erholsame Auszeit mit der Familie oder einen romantischen Urlaub zu zweit planen, unsere liebevoll eingerichteten Unterkünfte bieten Ihnen den perfekten Rückzugsort.
        </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;