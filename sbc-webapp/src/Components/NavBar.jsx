import React from "react";
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar(){

    return(
        <nav className="nav-bar">
            <section className="head"> 
                <h1 className="main-head">SBC Assistant</h1>
            </section>
            <section className="links">
                <Link className="link" to='/'>Homepage</Link>
                <Link className="link" to='/design-section'>Design</Link>
                <Link className="link" to='/theory-section'>Theory</Link>
                <Link className="link" to='/art-section'>Art</Link>
                <Link className='link' id="sbc-nav-btn" to='/sbc-solver'>Assistant</Link>
            </section>
        </nav>
    );
}

export default NavBar;