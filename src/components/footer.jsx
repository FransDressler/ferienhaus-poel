import React from 'react';

class Footer extends React.Component {
    
    render () {
        
        return (
        <footer className="bg-gray-700 p-6 ">
            <div className="container text-gray-200">
              <div className="social-links flex w-full justify-center gap-8 text-2xl m-6">
                <a rel="noreferrer" href="https://www.instagram.com/frans_dressler/" target="_blank">
                  <i className="fa fa-instagram fa-inverse hover:text-teal-400 hover:scale-125 transition ease-in-out"></i>
                </a>
                <a rel="noreferrer" href="https://www.linkedin.com/in/frans-dressler-b52496249/" target="_blank">
                  <i className="fa fa-linkedin fa-inverse hover:text-teal-400 hover:scale-125 transition ease-in-out"></i>
                </a>
                <a rel="noreferrer" href="https://github.com/FransDressler" target="_blank">
                  <i className="fa fa-github fa-inverse hover:text-teal-400 hover:scale-125 transition ease-in-out"></i>
                </a>
                <a rel="noreferrer" href="https://fransdressler.vercel.app" target="_blank">
                  <i className="fa-solid fa-globe hover:text-teal-400 hover:scale-125 transition ease-in-out"></i>
                </a>
              </div>
      
              <hr />
              <div className="grid grid-cols-1 lg:grid-cols-3 w-full flex-wrap-reverse gap-8 m-6">
              <p className="text-gray-200 lg:col-span-2 sm:text-center md:text-center lg:text-right font-bold ">
                © 2023 - Template developed by <a href="https://fransdressler.vercel.app" className="text-gray-400 hover:text-teal-400 transition ease-in-out pb-1">Frans Dressler</a>
              </p>
              <ul className="flex flex-col gap-1 text-right">
                <a href="/impressum" className="hover:text-teal-400 transition ease-in-out cursor-pointer">Impressum</a>
                <a href="/datenschutzrichtlinien" className="hover:text-teal-400 transition ease-in-out cursor-pointer">Datenschutzrichtlinien</a>
                <a href="/kontakt" className="hover:text-teal-400 transition ease-in-out cursor-pointer">Kontakt</a>
              </ul>
              </div>  
            </div>
          </footer>
        )
    };
}

export default Footer;