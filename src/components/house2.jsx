import ImageSliderSmall from './ImageSliderSmall';
import { SliderDataHouse2 } from './sliderDataHouse2';

function house2() {
    return(
        <div className="bg-teal-600/90 min-h-screen px-0 py-12 sm:px-6 lg:px-8 lg:py-[6rem] max-w-screen">
            <div className="flex flex-col lg:flex-row items-center max-w-screen">
                <div className="flow p-8">
                    <h1 className="text-3xl lg:text-5xl font-semibold text-gray-200 ff-sans-normal">Ferienhaus - "Peuler Insel Leiw"</h1>
                    <ul className="flex align-center lg:flex-row list-none flex-col max-w-screen">
                        <li>
                            <div className="font-medium text-lg ff-sans-normal">Ferienhaus</div>
                            <div className="text-sm text-gray-300">110qm</div>
                        </li>
                        <div className="w-0 rounded-lg h-[100%] border"></div>
                        <li>
                            <div className="font-medium text-lg ff-sans-normal">3 Schlafzimmer</div>
                            <div className="text-sm text-gray-300">Platz für 6 Personen</div>
                        </li>
                        <div className="w-0 rounded-lg h-full border"></div>
                        <li><div className="font-medium text-lg ff-sans-normal">2 Badezimmer</div></li>
                        <div className="w-0 rounded-lg h-full border"></div>
                        <li>
                            <div className="font-medium text-lg ff-sans-normal">Leben, kochen, wohnen</div>
                            <div className="text-sm text-gray-300">Küche, Terrasse/Patio, Garten</div>
                        </li>
                    </ul>
                    <p>
                    Genießen Sie Ihren Urlaub in diesem von den Eigentümern liebevoll und hochwertig eingerichteten gemütlichen Ferienhaus mit ca.100m². Im Erdgeschoss befindet sich der großzügige, lichtdurchflutete, in warmen Farben eingerichtete Wohn-Eßbereich mit offener Einbauküche. Vom Wohnzimmer können Sie durch den weiten Blick in die Natur, wunderschöne Sonnenuntergänge genießen.
                    </p>
                    <a href="/buchen" class="relative inline-flex items-center px-5 py-2 overflow-hidden text-lg font-medium text-teal-50 border border-2 border-white rounded-md group hover:bg-white hover:text-teal-400">
                        
                        <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <i class="fa-solid fa-cart-shopping hover:text-teal-400"></i>
                        </span>
                        <span class="relative font-semibold ff-sans-normal hover:text-teal-400">Jetzt buchen</span>
                    </a>
                </div>
                <div>
                    <ImageSliderSmall slides={SliderDataHouse2} /> 
                </div>
            </div>
        </div>
    )
}

export default house2;