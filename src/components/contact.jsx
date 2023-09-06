import React from 'react';
import Image from '../images/house_images/image_6.jpeg';

function Contact() {
  return (
      <div className='container-full bg-white text-dark' id="contact">
        <section className="text-white" id="sec-1">
            <h2 className="ff-sans-normal fs-700">Sind Sie interessiert daran, <br /> Häuser zu buchen?</h2>
            <img src={Image} alt="" className="contact-image"/>
        </section>
        <section className="flex">
            <div className="card bg-dark text-white">
                <h3 className="ff-sans-normal text-accent fs-500">Kontaktieren Sie uns</h3>
                <p>Sie können uns per Email oder telefonisch erreichen.</p>
                <div>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        class="cta-btn cta-btn--resume"
                        href="mailto:tine.noetzel@gmx.de"
                        >tine.noetzel@gmx.de
                        </a> <br />
                        <a
                        rel="noreferrer"
                        target="_blank"
                        class="cta-btn cta-btn--resume"
                        href="tel:+491727418268"
                        >+49 172 7418268
                        </a>
                </div>
            </div>
            <div className="card bg-med text-dark">
                <h3 className="ff-sans-normal text-dark fs-500">Buchen Sie jetzt!</h3>
                <p>Unter folgendem Link können Sie jetzt Ihren Traumurlaub buchen.</p>
                <div className="btn-flex">
                    <a href="/buchen" class="cssbuttons-io-button bg-dark text-white"> Buchen
                      <div class="icon">
                        <i className='fa-solid fa-cart-shopping text-dark'></i>
                      </div>
                    </a>
                </div>
            </div>
            <div className=" card bg-dark text-white">
                <h3 className="ff-sans-normal text-accent fs-500">Sind Sie an einer Website interessiert?</h3>
                <p>Kontaktieren Sie mich jetzt oder schauen Sie auf meiner Website vorbei.</p>
                <div className="btn-flex">
                    <a href="https://fransdressler.vercel.app"  class="cssbuttons-io-button bg-med text-white "> Website
                      <div class="icon">
                        <i className='fa-brands fa-edge text-med'></i>
                      </div>
                    </a>
                    <a href="mailto:frans.dressler@gmx.de"class="cssbuttons-io-button bg-med text-white"> Email
                      <div class="icon">
                        <i className='fa fa-envelope text-med'></i>
                      </div>
                    </a >
                </div>
            </div>
        </section>
    </div>
  );
}

export default Contact;
