import React from 'react';
import Buscador from '../Buscador/Buscador';

function Header(){
    return(
        <>
        <header>
        <h1>OnFilms</h1>
        <section>
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>
            <Buscador/>
        </section>
        </header>
        </>
    )

}

export default Header;
