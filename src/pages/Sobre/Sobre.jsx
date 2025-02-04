import React, { useState } from 'react';
import './Sobre.css';
import banner from './infos.png';
import { Link } from 'react-router-dom'; 
import festa from './festa.jpeg';

function Sobre() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
        <div className="desktop">
        <br/>
            <div className="containerSobre">
                <div className="btnpreto">
                {/* <h1 id='title_saibaMais'>Saiba Mais!</h1> */}
                <br/>
                <img src={banner} id='imgSobre' alt="Banner" />
            </div>
            <br />
            <div className="centro">
                {/* <img id='banner' src={festa} alt="" srcset="" /> */}
            </div>
         
            <br />
            {/* <p id="title_acordion">SOBRE </p> */}
            <div className="accordion">
                <div className="accordion-item">
                    <button
                        className={`accordion-header ${activeIndex === 0 ? 'active' : ''}`}
                        onClick={() => toggleAccordion(0)}
                    >
                        🚫 Regras
                    </button>
                    {activeIndex === 0 && (
                 <div className="accordion-content">
                 <p id='regra'>
                   Prepare-se para a melhor festa de carnaval!🎊🔥
               
                   <br/>
                   🚨Alguns spoilers! Desta vez, reconfiguramos todo o nosso set de DJ’s, conteremos com um artista que dividiu palco com estrelas da música nacional na maior festa universitária do Brasil, além disso, um paredão será o responsável de percutir o som para os nossos convidados!
                   <br/>
                   🌟 A vibe vai ser única, a magia carnavalesca tomará conta da nossa noite! Vá com seu abadá!
                   <br/>
                   🚫 Proibida a entrada de garrafas de vidro!
                   <br/>
                   🗓️ 08/03/2025
                   <br/>
                   ⏰ 21:00
                   <br/>
                   📍SRPQ
                 </p>
               </div>
                    
                    )}
                </div>
                <div className="accordion-item">
                    <button
                        className={`accordion-header ${activeIndex === 1 ? 'active' : ''}`}
                        onClick={() => toggleAccordion(1)}
                    >
                         🎉 Atrações
                    </button>
                    {activeIndex === 1 && (
                        <div className="accordion-content">
                          <p id="city">Clique</p>
                        <br/>

                        <div className="btnlaranja">
                    <Link to="/atracoes">
                            <button>Clique Aqui</button>
                    </Link>

                        </div>
                        </div>
                    )}
                </div>
                <div className="accordion-item">
                    <button
                        className={`accordion-header ${activeIndex === 2 ? 'active' : ''}`}
                        onClick={() => toggleAccordion(2)}
                    >
                        🗺️ Localização
                    </button>
                    {activeIndex === 2 && (
                        <div className="accordion-content">
                            <p id='city'>Santa Rita do Passa Quatro</p>
                            <div className="map-container">
                                <iframe
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=-47.4908%2C-21.7253%2C-47.4653%2C-21.6952&layer=mapnik"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    title="Mapa de Santa Rita do Passa Quatro"
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>

                    <div className="btnpreto">
                    <Link to="/pag">

            <button id='btn'>Quero Ir</button>
            </Link>
                </div>
                <br/>   </div></div>
        </>
    );
}

export default Sobre;
