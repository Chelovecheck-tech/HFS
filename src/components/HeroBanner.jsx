
import React from 'react';
import '../styles/HeroBanner.css'; 
import logo from '../images/logo.png'; 
 

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        {/* Логотип и название */}
        <div className="logo-section">
          <img 
            src={logo}
            alt="Hunting Tactics Sport Logo"
            className="logo"
          />
          
        </div>

        {/* Заголовок и текст */}
        <div className="text-section">
          <h1 className="main-title">ОХОТНИЧИЙ МАГАЗИН</h1>
          <p className="description">
            Магазин «NBB» приветствует вас! В нашем охотничье-рыболовном магазине вы найдёте всё необходимое для охоты, рыбалки и активного отдыха на природе. Мы предлагаем качественное снаряжение, экипировку и аксессуары от проверенных брендов. Наши консультанты помогут подобрать именно то, что подходит под ваши цели, опыт и условия.          </p>
        </div>

        
      </div>

      
      
    </section>
  );
};

export default HeroBanner;