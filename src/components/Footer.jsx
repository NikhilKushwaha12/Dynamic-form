// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <div className='foot'>
      <footer style={{ marginTop: '20px', textAlign: 'center', width: '100%', color: "black" }}>
        <small>Disclaimer: - Changeleaders.in never charged a single penny from the candidates. Our services are free of cost for candidates.</small>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
