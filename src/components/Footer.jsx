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
          <p>Телефон: +996 509 755 995</p>
          <p>E-mail: <a href="mailto:hts@bts.kg">Companynbb@gmail.com</a></p>
        </div>

        <div className="footer-social">
          <a href="https://wa.me/+996509755995" target="_blank" rel="noopener noreferrer" className="social-icon">
            
            <div className="icon whatsapp"><img className='icon' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-white-icon.png' alt="WhatsApp"/></div>
          </a>
          <a href="https://www.instagram.com/nbb_company_?igsh=MXB4ZXRia3NpM2owNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon">
            <div className="icon instagram"><img className='icon' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png' alt="Instagram"/></div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;