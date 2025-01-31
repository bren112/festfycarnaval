import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';
import logodiretoria from './logo2.png'
import homens from './homens.png'

function Home() {
    return (
        <>
        <h1 id='s'> DISPONIVEL EXCLUSIVAMENTE P/ DISPOSITIVOS MOBILE!</h1>
          
            <br />
            <div className="container">
                
                <div className="esq">
                <img src={logodiretoria} id='logo' alt="" srcset="" />
                <br />
                <br />
                <br />
                <img src={homens} alt="" srcset="" id='homens'/>
                </div>
              
              <div className="dir">
              <img src={homens} alt="" srcset="" id='homensDesktop'/>

              <Link to="/sobre">
                        <button id='queroIr'>VER MAIS!</button>
                    </Link>
              </div>
           
                    
                </div>
                
         
        
        </>
    );
}

export default Home;
