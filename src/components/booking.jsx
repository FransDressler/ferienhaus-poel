import React from 'react';
import image1 from '../images/house1/house1_img1.png';
import image2 from '../images/house2/house2_img3.png';

const HouseCard = ({index, name, street, island, location, maxPersons, bedrooms, space, price, onBookClick}) => {
    const imgSrc = index % 2 === 0 ? image1 : image2;
    return(

    <div className="max-w-[80vw] rounded bg-teal-500 overflow-hidden shadow-lg">
      <img className="w-full object-center object-cover h-80" src={imgSrc} alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{name}</div>
        <p className="text-gray-50 text-lg my-4 ff-sans-normal">{street}<br/>{island}<br/>{location}</p>
        <p className="text-gray-50 text-base">
         max. Anzahl Personen: {maxPersons} <br/>
         Schlafzimmer: {bedrooms} <br/>
         Fläche: {space}
        </p>
        <p className="text-gray-50 text-xl  font-semibold mt-4 text-base">
         Preis: {price}
        </p>
        <button onClick={onBookClick} className=" text-teal-50 font-semibold hover:text-teal-800 text-lg py-2 px-4 border border-teal-100 hover:border-transparent rounded hover:bg-teal-50 mt-20">
            Angebot Buchen
        </button>
      </div>
    </div>
    )
}

class Booking extends React.Component {
    constructor() {
        super();
        this.state = {
            bookingStage: "check",
            startDate: '',
            endDate: '',
            availableHouses: [],
            fName: '',
            lName: '',
            email: '',
            number_of_guests: '',
            place: '',
            zip: '',
            house_number: '',
            street: '',
            house:'',
            price: 0,
            checkError: '',
            bookError: '',
            laundry: false,
            towels: false,
            visitorsTax: true,
            noHouseAvailable: '',
            remark: '',
            charCount: 0
        }
    }

    onStartDateChange = (event) => {
        this.setState({startDate: event.target.value});
        this.setState({availableHouses: []})
    }

    onEndDateChange = (event) => {
        this.setState({endDate: event.target.value});
        this.setState({availableHouses: []})
    }

    checkAvailability = (event) => {
        event.preventDefault();
        
        // Validate start and end dates
        const { startDate, endDate, laundry, towels, visitorsTax, number_of_guests } = this.state;
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set time to 00:00:00.000

    
        if (!startDate || !endDate || !number_of_guests) {
            // If either start or end date is empty
            this.setState({ checkError: "Bitte alle Felder ausfüllen." });
            return;
        }
    
        if (new Date(startDate) < currentDate || new Date(endDate) < currentDate) {
            // If either start or end date is in the past
            this.setState({ checkError: "Die angegebenen Daten sollten nicht in der Vergangenheit liegen." });
            return;
        }
        
        if (new Date(startDate) > new Date(endDate)) {
            // If the start date is later than the end date
            this.setState({ checkError: "Das Startdatum sollte früher oder gleich dem Enddatum sein." });
            return;
        }
    
        // If validation passes, perform the API call
        fetch('https://ferienhaus-poel-api-bdba29522c7d.herokuapp.com/checkAvailability', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                start_date: startDate,
                end_date: endDate,
                laundry: laundry,
                towels: towels,
                visitorsTax: visitorsTax,
                number_of_guests: number_of_guests
            })
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                availableHouses: data.availableHouses,
                checkError: null,  // Clear any previous error messages
                noHouseAvailable: 'Keine Angebote in diesem Zeitraum verfügbar.'
            });
            console.log(data.availableHouses)
        })
        .catch(error => {
            console.log("Error fetching data: ", error);
            this.setState({ checkError: "Ein Fehler ist beim Abrufen der Daten aufgetreten." });
        });
    };
    
    

    sendReservation = (event) => {
        event.preventDefault();
        const { startDate, endDate, email, fName, lName, zip, number_of_guests, place, street, house_number, price, house, remark, laundry, towels, visitorsTax} = this.state;
        if (!startDate || !endDate || !email || !fName || !lName || !zip || !number_of_guests || !place || !street || !house_number || !price || !house) {
            this.setState({ bookError: "Alle Felder müssen ausgefüllt werden" });
            return;
        }

        if (this.state.charCount > 200) {
            this.setState({ bookError: "Ihre Bemerkung ist zu lang." });
            return;
        }
        const name = fName + " " + lName
        fetch('https://ferienhaus-poel-api-bdba29522c7d.herokuapp.com/addReservation', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            start_date: startDate,
            end_date: endDate,
            name: name,
            email: email,
            zip: zip,
            number_of_guests: number_of_guests,
            place: place,
            street: street,
            house_number: house_number,
            price:  price,
            house: house,
            remark: remark,
            laundry: laundry, 
            towels: towels,
            visitortax: visitorsTax
        })
        })
        .then(response => response.json())
        .catch(error => {
            console.log("Error sending data: ", error);
        }); 

        this.setState({bookingStage: 'finished'})
    }

    charCount = (text) => {
        if(!text) return 0;
        return text.split('').length;
    }

    render() {
    if (this.state.bookingStage === "check") {
        return(
        <div className="bg-teal-800 pt-[7em] min-h-screen">
            <div className="flow container pb-10">
                <h1 className="text-3xl lg:text-5xl font-black ff-sans-normal letter-spacing-2 text-white uppercase">Anfrage checken</h1>
                    <div className="flex flex-wrap">
                        <form>
                            <label for="dateStart" className="mb-3 block text-base font-bold">
                                Von
                            </label>
                            <input type="date" name="dateStart" id="dateStart" placeholder="" onChange={this.onStartDateChange}className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </form>
                        <form>
                            <label for="dateEnd" className="mb-3 block text-base font-bold">
                                Bis
                            </label>
                            <input type="date" name="dateEnd" id="dateEnd" placeholder="" onChange={this.onEndDateChange}className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </form>
                        <div className="flex flex-wrap ">
                                <form>
                                    <label for="guest" className="mb-3 block text-base font-bold">
                                        Anzahl der Gäste
                                    </label>
                                    <input onChange={(event) => {this.setState({number_of_guests: event.target.value})}} type="number" name="guest" id="guest" placeholder="5" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                </form>
                        </div>
                    </div>
                    <div className="flex flex-col  mt-3">
                        <div className="flex flex-wrap gap-3">
                            <p className="ff-sans-normal text-lg items-centers w-96"><span className="font-semibold">Brauchen sie Bettwäsche?</span> (12€ pro Person)</p>
                            { this.state.laundry ?     
                                        <i className="fa-solid fa-circle-check cursor-pointer fa-2x" onClick={() => this.setState({laundry:false,availableHouses:[],noHousesAvailable: ''})}></i> :
                                        <i className="fa-regular fa-circle cursor-pointer fa-2x" onClick={() => this.setState({laundry:true,availableHouses:[],noHouseAvailable: ''})}></i>
                            }
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <p className="ff-sans-normal text-lg items-centers w-96"><span className="font-semibold">Brauchen sie Handtücher?</span> (10€ pro Person)</p>
                            { this.state.towels ?     
                                        <i className="fa-solid fa-circle-check cursor-pointer fa-2x" onClick={() => this.setState({towels:false,availableHouses:[],noHousesAvailable: ''})}></i> :
                                        <i className="fa-regular fa-circle cursor-pointer fa-2x" onClick={() => this.setState({towels:true,availableHouses:[],noHouseAvailable: ''})}></i>
                            }
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <p className="ff-sans-normal text-lg items-centers w-96"><span className="font-semibold">Benötigen sie Kurtaxe?</span> (2,50€ pro Person)</p>
                            { this.state.visitorsTax ?     
                                        <i className="fa-solid fa-circle-check cursor-pointer fa-2x" onClick={() => this.setState({visitorsTax:false,availableHouses:[],noHousesAvailable: ''})}></i> :
                                        <i className="fa-regular fa-circle cursor-pointer fa-2x" onClick={() => this.setState({visitorsTax:true,availableHouses:[],noHouseAvailable: ''})}></i>
                            }
                        </div>
                    </div>
                    <h2 className="text-lg font-semibold ff-sans-normal text-white">{this.state.checkError}</h2>
                    <button onClick={this.checkAvailability} className=" text-teal-50 font-semibold hover:text-teal-800 text-lg py-2 px-4 border border-teal-100 hover:border-transparent rounded hover:bg-teal-50">
                        Angebot prüfen
                    </button>
                    {this.state.availableHouses.length === 0 ?
                        <p>{this.state.noHouseAvailable}</p> :
                    <div className="flex flex-wrap items-center">
                        
                        {this.state.availableHouses.map((house, index) => {
                            return (
                                <HouseCard
                                    kex={index}
                                    name={house.house.name}
                                    street={house.house.street}
                                    island={house.house.island}
                                    location={house.house.location}
                                    maxPersons={house.house.maxPersons}
                                    bedrooms={house.house.bedrooms}
                                    space={house.house.space}
                                    price={house.totalPrice}
                                    index={index}
                                    onBookClick={() => {
                                        this.setState({ bookingStage: 'booking' });
                                        this.setState({ house: house.house.houseId});
                                        this.setState({ price: house.totalPrice});
                                    }}
                                />
                            )
                        })}
                    </div>}
                    
            </div>
    </div>
    )} if (this.state.bookingStage === "booking") {
        return(
                <div className="bg-teal-800 pt-[7em]">
                    <div className="flow container pb-10">
                        <h1 className="text-3xl lg:text-5xl font-black ff-sans-normal letter-spacing-2 text-white uppercase">Angaben</h1>
                        <div className="flex flex-wrap ">
                                <form>
                                    <label for="dateStart" className="mb-3 block text-base font-bold">
                                        Von
                                    </label>
                                    <p>{this.state.startDate}</p>
                                </form>
                                <form>
                                    <label for="dateEnd" className="mb-3 block text-base font-bold">
                                        Bis
                                    </label>
                                    <p>{this.state.endDate}</p>
                                </form>
                            </div>
                            <div className="flex flex-wrap ">
                                <form className="max-w-sm">
                                    <label for="fName" className="mb-3 block text-base font-bold">
                                        Name
                                    </label>
                                    <input onChange={(event) => {this.setState({fName: event.target.value})}} type="text" name="fName" id="fName" placeholder="Vorname" className="w-full rounded-md bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                </form>
                                <form className="max-w-sm">
                                    <label for="lName" className="mb-3 block text-base font-bold">
                                        Nachname
                                    </label>
                                    <input onChange={(event) => {this.setState({lName: event.target.value})}} type="text" name="lName" id="lName" placeholder="Nachname" className="w-full rounded-md bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                </form>
                            </div>
                            <div className="flex flex-wrap ">
                                <form className="max-w-sm">
                                    <label for="email" className="mb-3 block text-base font-bold">
                                        Email
                                    </label>
                                    <input onChange={(event) => {this.setState({email: event.target.value})}} type="text" name="email" id="email" placeholder="Email" className="w-full rounded-md bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                </form>
                            </div>
                            <div className="flex flex-wrap ">
                                <form>
                                    <label for="plz" className="mb-3 block text-base font-bold">
                                        Postleitzahl
                                    </label>
                                    <input onChange={(event) => {this.setState({zip: event.target.value})}} type="number" name="plz" id="plz" placeholder="5" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                </form>
                                <form className="max-w-sm">
                                    <label for="location" className="mb-3 block text-base font-bold">
                                        Ort
                                    </label>
                                    <input onChange={(event) => {this.setState({place: event.target.value})}} type="text" name="location" id="location" placeholder="Ort" className="w-full rounded-md bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                </form>
                                <form className="max-w-sm">
                                    <label for="street" className="mb-3 block text-base font-bold">
                                        Straße
                                    </label>
                                    <input onChange={(event) => {this.setState({street: event.target.value})}} type="text" name="street" id="street" placeholder="Straße" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                </form>
                                <form>
                                    <label for="houseNumber" className="mb-3 block text-base font-bold">
                                        Hausnummer
                                    </label>
                                    <input onChange={(event) => {this.setState({house_number: event.target.value})}} type="number" name="houseNumber" id="houseNumber" placeholder="10" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                </form>
                            </div><div className="flex flex-wrap ">
                                <form>
                                    <label for="guest" className="mb-3 block text-base font-bold">
                                        Bemerkung
                                    </label>
                                    <textarea
                                    className="text-dark p-1 rounded-sm max-w-[80vw]"
                                    onChange={() => {
                                        this.setState({remark: event.target.value});
                                        this.setState({charCount: this.charCount(event.target.value)})
                                    }}
                                    id="shortDescription"
                                    rows="4" // Defines the number of visible text lines
                                    cols="50" // Defines the number of characters visible per line
                                    placeholder="Kurzbeschreibung..."
                                />
                                <div className="word-count">Zeichen: {this.state.charCount}/200</div>
                                </form>
                            </div>
                            <div className="flex flex-wrap ">
                                <form>
                                    <label for="guest" className="mb-3 block text-base font-bold">
                                        Anzahl der Gäste
                                    </label>
                                    <p>{this.state.number_of_guests}</p>
                                </form>
                            </div>
                            <h2 className="text-lg font-semibold ff-sans-normal text-white">{this.state.bookError}</h2>
                            <button onClick={this.sendReservation} className=" text-teal-50 font-semibold hover:text-teal-800 text-lg py-2 px-4 border border-teal-100 hover:border-transparent rounded hover:bg-teal-50">
                                Für Angebot anfragen
                            </button>
                            </div>
                    </div>
     )} if (this.state.bookingStage === "finished") {
        return(
                <div className="w-screen min-h-screen grid place-items-center bg-teal-900">
                        <h2 className="text-lg ml-7 font-semibold ff-sans-normal text-white">Dankeschön für Ihre Reservierung. Ihre Anfrage wird geprüft. Wir senden Ihnen in den nächsten zwei Werktagen ein Angebot.</h2>

                </div>
     )}
    }
}

export default Booking;

