import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <a href='https://github.com/jaswindersinghsaini' target='blank'><img src='https://www.shareicon.net/data/48x48/2015/09/02/94536_mark_512x512.png' alt='Github Link'></img></a>
            <a href='https://www.linkedin.com/in/jaswinder-singh-2526673b/' target='blank'><img src='https://www.shareicon.net/data/48x48/2017/06/28/888041_logo_512x512.png' alt='LinkedIn'></img></a>
            <a href= 'https://stackoverflow.com/users/22396928/jaswinder-singh' target='blank'> <img src='https://www.shareicon.net/data/48x48/2017/06/21/887494_logo_512x512.png'alt='StackOverflow'></img></a>
        </footer>
    )
}

export default Footer;