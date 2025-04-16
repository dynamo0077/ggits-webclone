import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExploreSlider = () => {
  const slides = [
    {
      id: 1,
      image: "https://ggits.org/wp-content/uploads/2025/02/Oracle-Academy-logo-higher-res-rgb.png",
      title: "OracleAcad Low-Code Contest",
      link: "https://oracle-acada.vercel.app",
      buttonText: "See More"
    },
    {
      id: 2,
      image: "https://ggits.org/wp-content/uploads/2024/03/IEEE-International-Conference.jpg",
      title: "13th IEEE International Conference on Communication Systems and Network Technologies",
      content: `
        <p><strong>CSNT 2024</strong></p>
        <p><strong>06-07 April 2024</strong></p>
        <p><a href="https://ggits.org/13-ieee-international-conference-on/">Click here for sponsorship packages</a></p>
        <p><a href="https://ggits.org/paper-presentation-guidelines/">Click here for paper presentation guidelines</a></p>
      `,
      link: "https://ggits.org/pdf/csnt.pdf",
      buttonText: "Click here for brochure"
    },
    {
      id: 3,
      image: "https://ggits.org/wp-content/uploads/2023/04/rdvv-mou1.jpg",
      title: "GGITS Joins Hands with Inst. of Design Innovation Centre, RDVV for Niti AaYOG ACIC",
      content: `
        <div style="text-align: justify;">GGITS has added one more feather in its cap by becoming one of the partner institutes in a <strong>"2.5 crore INCUBATION CENTRE PROJECT"</strong> granted to <strong>RDVV by NEETI AYOG, New Delhi</strong>.</div>
        <div>Hearty congratulations to all the stake holders!</div>
      `
    },
    {
      id: 4,
      image: "https://ggits.org/wp-content/uploads/2023/06/NIRF2023.png",
      title: "GGITS Positioned in the Band of 151-300 in NIRF India Rankings 2023",
      content: `
        <div style="text-align: justify;">Gyan Ganga Institute of Technology and Sciences, Jabalpur secured rank between 151-300 in the NIRF Innovation Category</div>
        <div>Hearty congratulations to all the stake holders for this prestigious achievement!</div>
      `
    },
    {
      id: 5,
      image: "https://ggits.org/wp-content/uploads/2022/09/SIH_2022_Winners_ggits.png",
      title: "Smart India Hackathon 2022",
      content: `
        <p>Proud Moment for Gyan Ganga Group and Jabalpur. 3 Teams won in the Sixth edition of Smart India Hackathon 2022.</p>
        <p>Received Cash Prize of Rs. 1 Lakh each with Medal & Certificate.</p>
      `,
      link: "https://ggits.org/sih-2022/",
      buttonText: "Know More"
    }
  ];

  return (
    <section className="explore-section py-5">
      <div className="container">
        <h2 className="text-center mb-4"><strong>Explore Gyan Ganga</strong></h2>
        <Carousel fade interval={7000} className="explore-slider">
          {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <div className="row align-items-center">
                <div className="col-md-6">
                  {slide.image && (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="img-fluid"
                    />
                  )}
                </div>
                <div className="col-md-6">
                  <div className="slide-content text-center">
                    <h3 className="mb-3">
                      {slide.link ? (
                        <Link to={slide.link}>{slide.title}</Link>
                      ) : (
                        <span>{slide.title}</span>
                      )}
                    </h3>
                    {slide.content && (
                      <div 
                        className="mb-3"
                        dangerouslySetInnerHTML={{ __html: slide.content }}
                      />
                    )}
                    {slide.link && (
                      <Link to={slide.link} className="btn btn-primary">
                        {slide.buttonText || "Learn More"}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ExploreSlider;
