import React from 'react';

class Footer extends React.Component {
    
    render () {
        
        return (
        <footer class="footer navbar-static-bottom bg-dark white-text">
            <div class="container">
            <div className="flex w-full justify-center gap-8 text-2xl m-6">
                <a rel="noreferrer" href="https://www.instagram.com/frans_dressler/" target="_blank">
                  <i className="fa fa-instagram fa-inverse hover:text-teal-400  transition ease-in-out"></i>
                </a>
                <a rel="noreferrer" href="https://www.linkedin.com/in/frans-dressler-b52496249/" target="_blank">
                  <i className="fa fa-linkedin fa-inverse hover:text-teal-400  transition ease-in-out"></i>
                </a>
                <a rel="noreferrer" href="https://github.com/FransDressler" target="_blank">
                  <i className="fa fa-github fa-inverse hover:text-teal-400  transition ease-in-out"></i>
                </a>
                <a rel="noreferrer" href="https://fransdressler.vercel.app" target="_blank">
                  <i className="fa-solid fa-globe hover:text-teal-400  transition ease-in-out"></i>
                </a>
              </div>
      
              <hr />
              <p class="footer__text ff-sans-normal text-gray-50">
              © 2023 - Template developed by <a href="https://fransdressler.vercel.app" className="text-gray-400 hover:text-teal-400 transition ease-in-out pb-1">Frans Dressler</a>
              </p>

            </div>
          </footer>
        )
    };
}

export default Footer;