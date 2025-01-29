import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';
import logodiretoria from './logo2.png'
import homens from './homens.png'

function Home() {
    return (
        <>
          
            <br />
            <div className="container">
                <br />
             <img src={logodiretoria} id='logo' alt="" srcset="" />
             <img src={homens} alt="" srcset="" id='homens'/>
                    <Link to="/sobre">
                        <button id='queroIr'>VER MAIS!</button>
                    </Link>
                </div>
                
         
        
        </>
    );
}

export default Home;
