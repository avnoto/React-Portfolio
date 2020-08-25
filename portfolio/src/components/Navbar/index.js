import React from 'react';
import './style.css';
import About from '../../links/About';
import Contact from '../../links/Contact';
import Portfolio from '../../links/Portfolio';

function Navbar() {
  return (
    <header className='sticky-top'>
      <nav className='navbar navbar-expand-sm navbar-light'>
        <div className='container'>
          <span className='navbar-brand mb-1 h1'>Alexandra Noto</span>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <About />
              </li>
              <li className='nav-item'>
                <Portfolio />
              </li>
              <li className='nav-item'>
                <Contact />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
