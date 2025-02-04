import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Atracoes.css';
import kuri from './kuri.png'
import virtu from './virtu.png'
import texto from './texto.png'
import bri from './bri.png'
function Atracoes() {
    const [progress, setProgress] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controle do modal

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 1 : 0));
        }, 100);

        return () => clearInterval(interval); 
    }, []);

    // Função para abrir o modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="atracoes">
            <br />
          
            <br />
       
            <img 
                id="imgsobre" 
                src={texto} 
                alt="text" 
                onClick={openModal} 
                style={{ cursor: 'pointer' }} 
            />
            <br />
            <img 
                id="imgsobre" 
                src={kuri} 
                alt="DJ Kuri" 
                onClick={openModal} 
                style={{ cursor: 'pointer' }} 
            />
                <br />
          
          <br />
     
            <img 
                id="imgsobre" 
                src={virtu} 
                alt="DJ Virtu" 
                onClick={openModal} 
                style={{ cursor: 'pointer' }} 
            />
          <br />
     
            <img 
                id="imgsobre" 
                src={bri} 
                alt="DJ Virtu" 
                onClick={openModal} 
                style={{ cursor: 'pointer' }} 
            />
     <br />
     <div className="loading-circle">
                <div className="circle"></div>
            </div>
<br />
         
        

<Link to="/pag">
<button id='btn'>Quero Ir</button>
</Link>
<br />
<br />
<br />

</div>
    );
}

export default Atracoes;
