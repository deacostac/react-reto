import React, {useState, useEffect} from 'react'
import './menu.css';
import Logo from '../../assets/logo.png';

//I take the values ​​from the json file and store them in the data variable
const data = require('../../assets/info.json');

//this destructurin receives a status to know if it should show the form or not
const Menu = ({showForm, setShowForm}) => {

    const [airline, setAirline] = useState(null);
    const navBar = React.createRef();
    const menuOpen = React.createRef();

    //Function that opens and closes the hamburger menu
    const handleChangeMenu = () =>{
        setShowForm(true);
        navBar.current.classList.toggle('navbar-open');
        menuOpen.current.classList.toggle('menu-open');     
    }

    //open and close MenuHamburger mobile
    const handleChangeToggle = () =>{
        navBar.current.classList.toggle('navbar-open');      
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

    //load the menu when starting the page
    useEffect(() => {
        addMenuItem();
      });

    return (
        <>
            <header>
                <div className="container">
                <div className="logo-container">
                    <img className="header-logo" src={Logo} alt="itGlobers" />
                </div>
                <nav id="navbar" className="navbar" ref={navBar} onClick={handleChangeMenu}>
                    <ul id="menu-item" onClick={handleChangeToggle}>
                    {addMenuItem()}
                    </ul>
                </nav>
                <div id="menu-toggle" className="menu-toggle" ref={menuOpen} onClick={handleChangeToggle}>
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

