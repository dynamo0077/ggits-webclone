import React, { useState, useEffect } from 'react';
import './Carousel.css';

const slides = [
  {
    image: 'https://ggits.org/wp-content/uploads/2025/02/Oracle-Academy-logo-higher-res-rgb.png',
    title: <a href="https://oracle-acada.vercel.app">OracleAcad Low-Code Contest</a>,
    description: '',
    button: { text: 'See More', link: 'https://oracle-acada.vercel.app' },
  },
  {
    image: 'https://ggits.org/wp-content/uploads/2024/03/IEEE-International-Conference.jpg',
    title: <a href="https://ggits.org/pdf/csnt.pdf">13th IEEE International Conference on Communication Systems and Network Technologies</a>,
    description: (
      <>
        <p><strong>CSNT 2024</strong></p>
        <p><strong>06-07 April 2024</strong></p>
        <p><a href="https://ggits.org/13-ieee-international-conference-on/">Sponsorship packages</a></p>
        <p><a href="https://ggits.org/paper-presentation-guidelines/">Paper presentation guidelines</a></p>
      </>
    ),
    button: { text: 'Click here for brochure', link: 'https://ggits.org/pdf/csnt.pdf' },
  },
  {
    image: 'https://ggits.org/wp-content/uploads/2023/04/rdvv-mou1.jpg',
    title: 'GGITS Joins Hands with Inst. of Design Innovation Centre , RDVV for Niti AaYOG ACIC',
    description: (
      <>
        <div style={{textAlign: 'justify'}}>GGITS has added one more feather in its cap by becoming one of the partner institutes in a <strong>“2.5 crore INCUBATION CENTRE PROJECT”</strong> granted to <strong>RDVV by NEETI AYOG, New Delhi</strong>.</div>
        <div>Hearty congratulations to all the stake holders !</div>
      </>
    ),
    button: null,
  },
  {
    image: 'https://ggits.org/wp-content/uploads/2023/06/NIRF2023.png',
    title: 'GGITS Positioned in the Band of 151-300 in NIRF India Rankings 2023',
    description: (
      <>
        <div style={{textAlign: 'justify'}}>Gyan Ganga Institute of Technology and Sciences , Jabalpur secured rank between 151-300 in the NIRF Innovation Category</div>
        <div>Hearty congratulations to all the stake holders for this prestigious achievement !</div>
      </>
    ),
    button: null,
  },
  // Add more slides as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="explore-gyan-ganga-section">
      <h1 className="section-title"><strong>Explore Gyan Ganga</strong></h1>
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
        <div className="carousel-image-wrapper">
          <img
            src={slides[currentIndex].image}
            alt={typeof slides[currentIndex].title === 'string' ? slides[currentIndex].title : `Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
          <div className="carousel-overlay">
            <div className="carousel-content">
              <h2 className="carousel-slide-title">{slides[currentIndex].title}</h2>
              <div className="carousel-slide-description">{slides[currentIndex].description}</div>
              {slides[currentIndex].button && (
                <div className="carousel-slide-button-wrapper">
                  <a
                    className="carousel-slide-button"
                    href={slides[currentIndex].button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {slides[currentIndex].button.text}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <button className="carousel-btn next" onClick={nextSlide}>❯</button>
      </div>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
