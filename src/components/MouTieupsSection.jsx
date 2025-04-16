import React from 'react';
import './MouTieupsSection.css';

const tieups = [
  {
    name: 'Vnurt Incubation Centre',
    img: 'https://ggits.org/wp-content/uploads/2019/06/vnurt_logo.jpg',
    link: 'https://www.vnurt.com/'
  },
  {
    name: 'IIT Bombay Remote Center',
    img: 'https://ggits.org/wp-content/uploads/2019/05/iitbrc.png',
    link: 'https://ggits.org/iit-bombay-remote-center/'
  },
  {
    name: 'Swayam Portal',
    img: 'https://ggits.org/wp-content/uploads/2019/05/swayam.png',
    link: 'https://swayam.gov.in'
  },
  {
    name: 'Spoken Tutorials',
    img: 'https://ggits.org/wp-content/uploads/2019/03/download.png',
    link: 'https://spoken-tutorial.org/'
  },
  {
    name: 'GGITSNIC',
    img: 'https://ggits.org/wp-content/uploads/2019/04/ggitsnic.jpeg',
    link: 'https://ggits.org/facilities/entrepreneurship-cell-ggitsnic/'
  },
  {
    name: 'IBM SkillsBuild (formerly Open P-TECH)',
    img: 'https://ggits.org/wp-content/uploads/2022/12/ibmskillsbuild-gmen.png',
    link: 'https://skillsbuild.org/'
  }
];

const academies = [
  {
    name: 'Cisco Networking Academy',
    img: 'https://ggits.org/wp-content/uploads/2021/02/netacad.png',
    link: ''
  },
  {
    name: 'AWS Educate',
    img: 'https://ggits.org/wp-content/uploads/2022/12/header-aws-educate.png',
    link: 'https://aws.amazon.com/education/awseducate/'
  },
  {
    name: 'Red Hat Academy',
    img: 'https://ggits.org/wp-content/uploads/2022/12/redhatacademy-logo.png',
    link: 'https://www.redhat.com/en/services/training/red-hat-academy'
  },
  {
    name: 'Oracle Academy',
    img: 'https://ggits.org/wp-content/uploads/2021/02/Oracle_Academy_rgb.png',
    link: 'https://academy.oracle.com'
  },
  {
    name: 'Microsoft Imagine Academy',
    img: 'https://ggits.org/wp-content/uploads/2022/12/gbsb-global-certified-microsoft-imagine-academy.png',
    link: 'https://www.microsoft.com/en-us/education/imagine-academy'
  },
  {
    name: 'Pearson VUE-Authorized Test Center',
    img: 'https://ggits.org/wp-content/uploads/2022/12/pearson-vue-authorized-test-center-logo-us.jpg',
    link: 'https://home.pearsonvue.com/Test-centers.aspx'
  },
  {
    name: 'Remote Centre of IIRS(Indian Institute of Remote Sensing) ISRO',
    img: 'https://ggits.org/wp-content/uploads/2022/12/logo-removebg-preview.png',
    link: ''
  }
];

const MouTieupsSection = () => (
  <section className="mou-tieups-section-custom">
    <h2 className="mou-tieups-title">MOU’s &amp; Tie-ups</h2>
    <div className="mou-tieups-row">
      {tieups.map((item, idx) => (
        <div className="mou-tieup-card" key={idx}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.img} alt={item.name} className="mou-tieup-img" />
          </a>
          <div className="mou-tieup-name">
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
          </div>
        </div>
      ))}
    </div>
    <h2 className="mou-tieups-title" style={{marginTop: '30px'}}><strong>Academies of Institute</strong></h2>
    <div className="mou-academies-row">
      {academies.map((item, idx) => (
        <div className="mou-academy-card" key={idx}>
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt={item.name} className="mou-academy-img" />
            </a>
          ) : (
            <img src={item.img} alt={item.name} className="mou-academy-img" />
          )}
          <div className="mou-academy-name">
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
            ) : item.name}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MouTieupsSection;
