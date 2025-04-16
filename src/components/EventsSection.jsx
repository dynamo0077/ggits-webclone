import React from 'react';
import './EventsSection.css';

const events = [
  {
    id: 1,
    title: 'Gyanotsav 2023',
    image: 'https://ggits.org/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-30-at-00.02.44.jpg',
    link: 'https://ggits.org/gyanotsav-2023/?et_fb=1&PageSpeed=off',
    description: `Let’s buckle your shoe for the unlimited fun and learning with* Gyanotsav 2023* . Tentative dates for Cultural events are from 3rd January to 6th of January 2023. There will be 2 celebrity nights along with fashion show on 7th and 8th of January 2023.`,
    bg: 'bg-yellow'
  },
  {
    id: 2,
    title: 'Guest Lecture on "Values and Life Lessons"',
    image: 'https://ggits.org/wp-content/uploads/2022/12/Ec_event.png',
    link: '',
    description: `Guest Lecture on “Values and Life Lessons” was organized for faculties of Electronics and Communication Engineering Department on 11.07.2022. The invited speaker was Dr. D.V.S. Bhagavanulu, Dean, IQAC and Academics, REVA University, Bangalore.`,
    bg: 'bg-pink'
  },
  {
    id: 3,
    title: 'National Seminar on "The Expanding Role of Artificial Intelligence in Clinical Research"',
    image: 'https://ggits.org/wp-content/uploads/2022/12/MCPTE.jpg',
    link: '',
    description: `Gyan Ganga Institute of Technology & Sciences, Jabalpur, Department of Pharmacy has successfully Organized MPCST Sponsored National Seminar on “The Expanding Role of Artificial Intelligence in Clinical Research” on 31st October 2022. Chief Guest of the Event Dr. Milind J Umekar, Professor & Principal SKB College of Pharmacy, Kamptee, Nagpur and National APTI President blessed us with his presence` ,
    bg: 'bg-teal'
  },
  {
    id: 4,
    title: 'ICT Tools For E-Learning Workshop',
    image: 'https://ggits.org/wp-content/uploads/2020/08/Annotation-2020-08-11-141642-300x296.jpg',
    link: '',
    description: `“ICT Tools For E-Learning” Workshop from 24th – 29th August 2K20.`
  },
  {
    id: 5,
    title: 'Faculty Development Programme (FDP)',
    image: 'https://ggits.org/wp-content/uploads/2019/09/Screenshot-at-Sep-30-10-44-08.png',
    link: '',
    description: `22nd June 2019, Faculty Development Programme on Wireless Sensor Network will be organized at GGITS, ECE Department. Sponsored by AICTE.`
  },
  {
    id: 6,
    title: 'Engineering Design competition',
    image: 'https://ggits.org/wp-content/uploads/2022/09/2-300x169.jpeg',
    link: '',
    description: `Engineering Design competition (Event) on Innovative Construction Techniques was organised in the Department of Civil Engineering, Gyan Ganga Group on 10th sept 2022.`
  }
];

const EventsSection = () => {
  return (
    <section className="events-section-custom">
      <div className="events-header">
        <h1 className="events-title">Gyan Ganga Events</h1>
        <p className="events-subtitle"><strong>What’s happening in campus</strong></p>
        <div className="events-divider"></div>
      </div>
      <div className="events-grid">
        {events.map((event, idx) => (
          <div key={event.id} className={`event-card-custom ${event.bg ? event.bg : ''}`}>
            {event.image && (
              <a href={event.link || '#'} target="_blank" rel="noopener noreferrer">
                <img className="event-card-img" src={event.image} alt={event.title} />
              </a>
            )}
            <h4 className="event-card-title">
              {event.link ? (
                <a href={event.link} target="_blank" rel="noopener noreferrer">{event.title}</a>
              ) : event.title}
            </h4>
            <div className="event-card-desc">{event.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
