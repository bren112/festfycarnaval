import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';
import logodiretoria from './diretoria.png'
import homens from './homens.png'

function Home() {
    return (
        <>
          
            <br />
            <div className="container">
             <img src={logodiretoria} id='logo' alt="" srcset="" />
             <img src={homens} alt="" srcset="" id='homens'/>
                    <Link to="/dados">
                        <button>QUERO IR!</button>
                    </Link>
                </div>
                
         
        
        </>
    );
}

export default Home;
