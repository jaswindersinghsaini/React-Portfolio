import React, { useState } from "react";
import NavbarTabs from "./NavbarTabs";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('AboutMe');
    
    const renderPage = () => {
        if (currentPage === 'AboutMe'){
            return <AboutMe />;
        } 
        if (currentPage === 'Portfolio'){
            return <Portfolio />;
        } 
        if (currentPage === 'Resume'){
            return <Resume />;
        } 
        return <Contact />
        
        }; 

        const handlePageChange = (page) => setCurrentPage(page);
        
    return (
        <div>
            <NavbarTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    );
}
