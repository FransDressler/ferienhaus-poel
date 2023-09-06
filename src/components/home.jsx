import React from 'react';

function Testimonials() {
  return(
    <section class="bg-teal-600">
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2
      class="text-center text-4xl font-bold tracking-tight text-gray-1q00 sm:text-5xl"
    >
      Lesen Sie die Bewertungen unserer Kunden.
    </h2>

    <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">

      <blockquote class="rounded-lg bg-teal-50 p-6 shadow-lg sm:p-8">
        <div class="grid gap-2">
        <div>
            <p class="mb-0.5 text-xl font-semibold text-teal-900">Toller Urlaub - super schönes Haus in bester Lage</p>
          </div>
          <div class="flex justify-left gap-0.5 text-teal-400">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
          </div>
          <div>
            <p class="mt-0.5 text-lg font-medium text-teal-700">Kristina M.</p>
          </div>
          <div>
            <p class="-mt-1 text-gray-400">18. Juli 2023</p>
          </div>
        </div>

        <p class="mt-4 text-gray-700">
        Wir hatten eine tolle Woche auf Poel. Wir kommen schon 10 Jahre nach Poel und haben immer in anderen Unterkünften gewohnt. Diese Haus war nun das Schönste. Es war sehr gemütlich eingerichtet und toll ausgestattet. Es hat uns wirklich nichts gefehlt und die Heimreise viel uns sehr schwer. Viele schöne Details waren vor Ort. Eine schnelle, freundliche und einfache Kommunikation mit Eigentümer/Verwalter war jederzeit gegeben. Wir haben noch vor Ort für das kommende Jahr gebucht und freuen uns aufs Haus und die kleine idyllische Insel.
        </p>
      </blockquote>

      <blockquote class="rounded-lg bg-teal-50 p-6 shadow-lg sm:p-8">
        <div class="grid gap-2">
        <div>
            <p class="mb-0.5 text-xl font-semibold text-teal-900">Ferienhaus am Meer</p>
          </div>
          <div class="flex justify-left gap-0.5 text-teal-400">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
          </div>
          <div>
            <p class="mt-0.5 text-lg font-medium text-teal-700">Angelika C.</p>
          </div>
          <div>
            <p class="-mt-1 text-gray-400">15. Juni 2023</p>
          </div>
        </div>

        <p class="mt-4 text-gray-700">
        Wir waren eine Woche in dem gut ausgestatteten Ferienhaus, das nur 2 min vom Strand entfernt steht. Haben uns sehr wohl gefühlt. Alles in allem sehr ruhig auf der Insel. Wer das mag ist dort genau richtig. Leider sind Resturants nicht mehr alle offen.Super Anbindung mit dem Bus nach Wismar.
        </p>
      </blockquote>

      <blockquote class="rounded-lg bg-teal-50 p-6 shadow-lg sm:p-8">
        <div class="grid gap-2">
        <div>
            <p class="mb-0.5 text-xl font-semibold text-teal-900">Tolles Ostsee-FH auf Insel Poel</p>
          </div>
          <div class="flex justify-left gap-0.5 text-teal-400">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
          </div>
          <div>
            <p class="mt-0.5 text-lg font-medium text-teal-700">Rainer K.</p>
          </div>
          <div>
            <p class="-mt-1 text-gray-400">30. Aug. 2023</p>
          </div>
        </div>

        <p class="mt-4 text-gray-700">
        Wir haben 3 wunderschone Urlaubs-Wochen in dem FH auf Insel Poel verbracht. Das FH ist super ausgestattet und es hat alles gepasst, so dass wir uns wie zu Hause gefuehlt haben.
        </p>
      </blockquote>
    </div>
  </div>
</section>
  )
}

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
      <Testimonials/>
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