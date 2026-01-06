import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Мы всегда рады общению! Свяжитесь с нами любым удобным способом — звонком или сообщением, и мы поможем вам с любым вопросом.
        </p>

        <div className="footer-contacts">
          <p>Телефон: +996 701 451 126</p>
          <p>E-mail: <a href="mailto:hts@bts.kg">NBB@nbb.kg</a></p>
        </div>

        <div className="footer-social">
          <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1" target="_blank" rel="noopener noreferrer" className="social-icon">
            
            <div className="icon whatsapp"><img className='icon' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-white-icon.png' alt="WhatsApp"/></div>
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <div className="icon instagram"><img className='icon' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png' alt="Instagram"/></div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;