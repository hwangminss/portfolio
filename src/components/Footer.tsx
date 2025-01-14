import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>© {currentYear} Hwang Min All rights reserved.</p>
        </footer>
    );
};

export default Footer;