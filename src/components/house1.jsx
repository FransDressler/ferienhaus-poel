import ImageSliderSmall from './ImageSliderSmall';
import { SliderDataHouse1 } from './sliderDataHouse1';

function house1() {
    return(
        <div className="bg-teal-600/90 min-h-screen px-0 py-12 sm:px-6 lg:px-8 lg:py-[6rem] max-w-screen">
            <div className="flex flex-col lg:flex-row items-center max-w-screen ">
                <div className="flow p-8">
                    <h1 className="text-3xl lg:text-5xl font-semibold text-gray-200 ff-sans-normal">Ferienhaus - "Einfach schön"</h1>
                    <ul className="flex align-center lg:flex-row list-none flex-col max-w-screen ">
                        <li>
                            <div className="font-medium text-lg ff-sans-normal">Ferienhaus</div>
                            <div className="text-sm text-gray-300">90qm</div>
                        </li>
                        <div className="w-0 rounded-lg h-[100%] border"></div>
                        <li>
                            <div className="font-medium text-lg ff-sans-normal">2 Schlafzimmer</div>
                            <div className="text-sm text-gray-300">Platz für 5 Personen</div>
                        </li>
                        <div className="w-0 rounded-lg h-full border"></div>
                        <li><div className="font-medium text-lg ff-sans-normal min-w-[9rem] text-center">2 Badezimmer</div></li>
                        <div className="w-0 rounded-lg h-full border"></div>
                        <li>
                            <div className="font-medium text-lg ff-sans-normal">Leben, kochen, wohnen</div>
                            <div className="text-sm text-gray-300">Küche, Essbereich, Esszimmer</div>
                        </li>
                    </ul>
                    <p className="max-w-screen ">
                    Genießen Sie einen Traumurlaub unter Reet: das große, helle und gemütliche Wohnzimmer mit schönem Essbereich lässt keine Wünsche offen!
                    <br/><br/>
                    Ein Bad mit Dusche/WC im EG, ein Hauswirtschaftsraum mit Waschmaschine und Trockner sowie eine große Terrasse mit Gartenmöbeln, Liegestühlen und Steingrill warten darauf, Ihnen einen herrlichen Urlaub zu bescheren.
                    <br/><br/>
                    Die Küche bietet Ihnen alles, was man für einen gelungenen Urlaub braucht: Kühlschrank, Backofen, Geschirrspüler, Microwelle etc. Im Obergeschoss finden Sie 2 schöne , kuschelige Schlafzimmer, eins mit Doppelbett und ein Schlafzimmer mit zwei Einzelbetten.
                    <br/><br/>
                    Zusätzlich befindet sich ein großes Bad im OG mit Dusche, Badewanne, Waschbecken und WC.
                    <br/><br/>
                    Kinderreisebett und Hochstuhl stehen für die kleinen Gäste zur Verfügung.
                    <br/><br/>
                    Stellplatz für 1 PKW.
                    <br/><br/>
                    Nichtraucher!!! Kleine Hunde bis Schulterhöhe 40 cm erlaubt!
                    <br/><br/>
                    Während der Hauptsaison Buchungen nur mind. 7 Tage von Samstag zu Samstag.
                    <br/><br/>
                    Sollte Ihr gewünschter Zeitraum ausgebucht sein, haben wir noch ein sehr schönes, ruhig gelegenes Ferienhaus in Fährdorf auf der Insel Poel.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <ImageSliderSmall slides={SliderDataHouse1} />
                    <a href="/buchen" class=" mt-20 relative inline-flex items-center px-5 py-4 overflow-hidden text-lg font-medium text-teal-50 border border-2 border-white rounded-md group hover:bg-white hover:text-teal-400">
                        
                        <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <i class="fa-solid fa-cart-shopping hover:text-teal-400"></i>
                        </span>
                        <span class="relative font-semibold ff-sans-normal hover:text-teal-400">Jetzt buchen</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default house1;