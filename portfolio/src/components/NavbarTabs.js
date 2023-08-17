import React from "react";
import '../styles/Navbar.css';

function NavbarTabs({currentPage, handlePageChange }) {
    return(
        <ul className="navbar">
            <li className="nav-item">
                <a href = "#AboutMe" 
                onClick={() => handlePageChange('AboutMe')} 
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
                     About Me </a>
            </li>
            <li className="nav-item">
                <a href = "#portfolio" 
                onClick={() => handlePageChange('Portfolio')} 
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}> 
                     Portfolio </a>
            </li>
            <li className="nav-item">
                <a href = "#Resume"onClick= {()=> handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                     Resume </a>
            </li>
            <li className="nav-item">
                <a href = "#Contact"
                onClick= {()=> handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                     Contact ME </a>
            </li>
            
        </ul>
    );
}

export default NavbarTabs;