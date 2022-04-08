import React from 'react';

function Header(){
    return(
        <>
        <header>
        <h1>OnFilms</h1>
        <section>
            <i class="fas fa-th"></i>
            <i class="fas fa-align-justify"></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </section>
        </header>
        </>
    )

}

export default Header;
