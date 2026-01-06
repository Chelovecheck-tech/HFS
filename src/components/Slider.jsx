import wp1 from '../images/wp1.jpg'
import wp2 from '../images/wp2.jpg'
import wp3 from '../images/wp3.jpg'
import { useEffect, useState } from "react";
import "../styles/Slider.css";


const slides = [wp2, wp3];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length); 
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const scrollToCatalog = (e) => {
    e.preventDefault();
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="slider">
      <div
        className="slides"
        style={{
  transform: `translateX(-${index * 100}%)`,
  transition: "transform 0.8s ease",
}}

      >
        {slides.map((slide, i) => (
          <div className="slide" key={i}>
            <img src={slide} alt={`slide-${i}`} />
          </div>
        ))}
      </div>
      <a href="/shop" onClick={scrollToCatalog} className="slider-button">МАГАЗИН</a>
    </div>
  );
}
