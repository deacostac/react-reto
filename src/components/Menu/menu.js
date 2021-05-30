import React, {useState} from 'react'
import './menu.css';
import Logo from '../../assets/logo.png';

const data = require('../../assets/info.json');


const Menu = ({showForm, setShowForm}) => {

    const [airline, setAirline] = useState(null);

    //Function that opens and closes the hamburger menu
    const handleChangeMenu = () =>{
        setShowForm(true);
        let navBar = document.getElementById('navbar');
        navBar.classList.toggle('navbar-open');
        let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');     
    }
    

    //Function that paints the menu items according to the json file
    function addMenuItem(){

        return data.map((option) => {
            return (
              <li key={option.id} onClick={() => setAirline(option.name)}>
                <a onClick={handleChangeMenu}>
                  {option.name}
                </a>
              </li>
            );
          });
        
    }

    window.onload = () => {
        addMenuItem();
    }

    return (
        <>
            <header>
                <div className="container">
                <div className="logo-container">
                    <img className="header-logo" src={Logo} alt="itGlobers" />
                </div>
                <nav id="navbar" className="navbar">
                    <ul id="menu-item" >
                    {addMenuItem()}
                    </ul>
                </nav>
                <div id="menu-toggle" className="menu-toggle" onClick={handleChangeMenu}>
                    <div className="hamburguer"></div>
                </div>
                </div>
            </header>
            {showForm && 
            <div className="welcome">
                <p>Hola, bienvenido, sabemos que quieres viajar en un {airline}, por favor
                   diligencia el siguiente formulario:</p>
            </div>}
            {!showForm && 
            <div className="welcome">
                <p>Hola, bienvenido, sabemos que quieres viajar por favor selecciona una aerolinea de tu preferencia.</p>
            </div>}
            
        </>
    )
}

export default Menu;

