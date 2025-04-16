import React from 'react';
import './StreamsSection.css';

const streams = [
  { name: 'COMPUTER SCIENCE AND ENGINEERING', link: 'http://ggits.org/cse/' },
  { name: 'MECHANICAL ENGINEERING', link: 'http://ggits.org/me/' },
  { name: 'Electrical Engineering', link: 'http://ggits.org/ee/' },
  { name: 'ELECTRONICS & COMMUNICATION ENGG', link: 'http://ggits.org/ec/' },
  { name: 'ELECTRICAL AND ELECTRONICS ENGINEERING', link: 'http://ggits.org/ex' },
  { name: 'Civil Engineering', link: 'http://ggits.org/civil/' },
  { name: 'CSE - IoT, & Cyber Security Including Block Chain', link: 'http://ggits.org/cse/' },
  { name: 'Computer Science & Business Systems (CSBS)', link: 'http://ggits.org/cse/' },
  { name: 'ROBOTICS AND ARTIFICIAL INTELLIGENCE', link: 'http://ggits.org/cse/' },
  { name: 'CSE - DATA SCIENCE', link: 'http://ggits.org/cse' },
  { name: 'CSE - ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING', link: 'http://ggits.org/cse' },
  { name: 'Computer Science And Design', link: 'http://ggits.org/cse/' },
];

const StreamsSection = () => (
  <section className="streams-section-custom">
    <h2 className="streams-title">
      <span style={{ fontFamily: 'Verdana' }}>Streams</span> To Pursue Your&nbsp; Passion
    </h2>
    <div className="streams-divider"></div>
    <div className="streams-grid">
      {streams.map((stream, idx) => (
        <a
          key={idx}
          className="stream-btn"
          href={stream.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {stream.name}
        </a>
      ))}
    </div>
  </section>
);

export default StreamsSection;
