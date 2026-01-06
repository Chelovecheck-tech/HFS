import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import "../styles/Header.css";
import logo from '../images/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToCatalog = (e) => {
    e.preventDefault();
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container">

        
        <div className="mobile-icons">
  <a href="#" className="ig-link">
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png" alt="Instagram"/>
  </a>
  <a href="#" className="wa-link">
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-white-icon.png" alt="WhatsApp"/>
  </a>
</div>
        <nav className="nav-left">
          <a href="#hero-banner">О нас</a>
          <a href="#catalog" onClick={scrollToCatalog}>Каталог</a>
          <a href="#footer">Контакты</a>
        </nav>

        
        <a href="/" className="logo-center">
          <div className="logo-wrapper">
            <img
              src={logo}
              alt="Логотип"
              className="logo-img"
            />
          </div>
        </a>

        
        <div className="phone-right">
            <a href ='' className='ig-link'><img src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'></img></a>
          <a href="tel:+996555123456" className="phone-link">
            <Phone className="phone-icon" />
            <span className="phone-text">+996 8355608</span>
          </a>
        </div>

        
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>О нас</a>
          <a href="#catalog" onClick={() => setMobileMenuOpen(false)}>Каталог</a>
          <a href="#contacts" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
          <a href="tel:+996555123456" className="mobile-phone-link">
            <Phone className="phone-icon" />
            <span>+996 555 123 456</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;