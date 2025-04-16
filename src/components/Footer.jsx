import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-bottom-custom">
      <div className="footer-container-custom">
        <div id="footer-info">
          Designed With <span style={{color: '#fff', fontSize: '1.1em', margin: '0 2px'}}>♥</span>
          <a href="/development-team" className="footer-link"><b>GGITS-Clone</b></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
