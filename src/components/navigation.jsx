import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-50/30 backdrop-blur-md z-50 p-6 fixed w-screen  mt-0 lg:bg-transparent lg:backdrop-blur-none">
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 rounded text-gray-200 border-gray-400 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ?  
                  <i className="fa-solid fa-x"></i> :
                  <i className="fa-solid fa-bars"></i>
                  }
                </button>
            </div>
            <div className={isOpen ? "w-full block flex-grow ease-in duration-300 lg:flex lg:items-center lg:w-auto" : "w-full block hidden flex-grow ease-in duration-300 lg:flex lg:items-center lg:w-auto"}>
                <div className="text-sm  lg:flex lg:w-full lg:justify-end gap-2 items-center">
                    <a href="/" className="block mt-2 lg:mt-0 lg:inline-block lg:mt-0 text-gray-50 hover:text-teal-200 mr-4 font-medium ff-sans-normal text-lg">
                        Home
                    </a>
                    <a href="/häuser" className="block mt-2 lg:mt-0 lg:inline-block lg:mt-0 text-gray-50 hover:text-teal-200 mr-4 font-medium ff-sans-normal text-lg">
                        Häuser
                    </a>
                    <a href="/haus1" className="block mt-2 lg:mt-0 lg:inline-block lg:mt-0 text-gray-50 hover:text-teal-200 mr-4 font-medium ff-sans-normal text-lg">
                        Ferienhaus - "Einfach schön"
                    </a>
                    <a href="/haus2" className="block mt-2 lg:mt-0 lg:inline-block lg:mt-0 text-gray-50 hover:text-teal-200 mr-4 font-medium ff-sans-normal text-lg">
                        Ferienhaus - "Peuler Insel Leiw"
                    </a>
                    <a href="/standorte" className="block mt-2 lg:mt-0 lg:inline-block lg:mt-0 text-gray-50 hover:text-teal-200 mr-4 font-medium ff-sans-normal text-lg">
                        Standorte
                    </a>
                    <a href="/kontakt" className="block mt-2 lg:mt-0 lg:inline-block lg:mt-0 text-gray-50 hover:text-teal-200 mr-4 font-medium ff-sans-normal text-lg">
                        Kontakt
                    </a>
                    <a href="/buchen" className="block lg:inline-block font-semibold transition ease-in-out border-2 rounded-[.5em] ff-sans-normal text-center text-lg lg:mt-0 mt-2 border-teal-50 hover:bg-teal-50 border hover:text-teal-700 px-4 py-2 ">
                        Buchen
                    </a>

                </div>
            </div>
        </nav>
    ); 
}

export default Navbar;