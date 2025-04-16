import React from 'react';
import './AcademicsSection.css';

const academics = [
  {
    title: 'Undergraduate Education',
    description: 'Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise',
    link: 'https://ggits.org/ug-program/',
    icon: 'fa-graduation-cap',
    bgClass: 'cont1',
    contentClass: 'content1',
  },
  {
    title: 'Postgraduate Education',
    description: 'Unsurpassed opportunities to participate in the advancement of entire fields of knowledge',
    link: 'https://ggits.org/pg-program/',
    icon: 'fa-graduation-cap',
    bgClass: 'cont2',
    contentClass: 'content2',
  },
  {
    title: 'OUR MOUs',
    description: 'Continuing adult education, executive and professional programs, and programs for K-12 students',
    link: 'https://ggits.org/mous/',
    icon: 'fa-user-graduate',
    bgClass: 'cont3',
    contentClass: 'content',
  }
];

const AcademicsSection = () => (
  <section className="academics-section-custom">
    <div className="academics-title-wrapper">
      <h2 className="academics-title">Academics</h2>
    </div>
    <div className="academics-cards-row">
      {academics.map((item, idx) => (
        <div className={`academics-card-outer ${item.bgClass}`} key={idx}>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="academics-card-link">
            <div className="card">
              <div className="icon-absolute">
                <i className={`fa ${item.icon}`}></i>
              </div>
              <div className="card-content-absolute">
                <h3 className="academics-card-title">{item.title}</h3>
                <p className="academics-card-desc">{item.description}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default AcademicsSection;
