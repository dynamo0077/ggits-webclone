import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Navbar as BootstrapNavbar } from 'react-bootstrap';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const menuItems = [
    {
      title: 'About Us',
      items: [
        { title: 'About GGITS', link: '/about-ggits' },
        { title: 'Vision & Mission', link: '/vision-mission' },
        { title: 'Management Board', link: '/about-us/messages' },
        { title: 'National Ranking', link: '/about-us/national-ranking' },
        {
          title: 'Accreditation',
          items: [
            { title: 'NBA Accreditation', link: '/about-us/nba-accreditation' },
            { title: 'ARIIA Certificate', link: '/about-us/ariia-certificate' },
            { title: 'AICTE Approval Letters', link: '/about-us/aicte-approval-letters' }
          ]
        },
        { title: "MoU's", link: '/mous' },
        { title: 'Audit Reports', link: '/audit-reports' }
      ]
    },
    { title: 'Admission', link: '/admission-support' },
    {
      title: 'Facilities',
      items: [
        { title: 'Library', link: '/facilities/library' },
        { title: 'Academies', link: '/academies' },
        { title: 'Social Activities', link: '/facilities/social-activities' },
        { title: 'NCC', link: '/facilities/ncc' },
        { title: 'Sports', link: '/facilities/sports' },
        { title: 'Women Empowerment Cell', link: '/facilities/women-empowerment-cell' },
        { title: 'Entrepreneurship cell & Incubation Center', link: '/facilities/entrepreneurship-cell-ggitsnic' },
        { title: 'Clubs', link: '/club' },
        { title: 'MOOC', link: 'https://swayam.gov.in/' },
        { title: 'Grievance Redressal Cell', link: '/facilities/grievance-redressal-cell' },
        { title: 'Anti Ragging Cell', link: '/pdf/Anti-Ragging-Cell.pdf' },
        { title: 'IQAC', link: '/pdf/IQAC.pdf' },
        { title: 'OnlineFees', link: 'https://gyangangagroupfees.in/' }
      ]
    },
    {
      title: 'Departments',
      items: [
        { title: 'Dept. of CSE', link: '/cse' },
        { title: 'Dept. of ECE', link: '/ec' },
        { title: 'Dept. of EE', link: '/ee' },
        { title: 'Dept. of ME', link: '/me' },
        { title: 'Dept. of EX', link: '/ex' },
        { title: 'Dept. of IT', link: '/it' },
        { title: 'Dept. of Civil', link: '/civil' },
        { title: 'Dept of CSBS', link: '/pdf/csbs_brochure.pdf' },
        { title: 'Dept. of MCA', link: '/mca' },
        { title: 'Dept. of MBA', link: '/mba' },
        { title: 'Dept of AIML', link: '/pdf/aiml_brochure.pdf' },
        { title: 'Dept of CSD', link: '/pdf/CSD_Brochure.pdf' },
        { title: 'Dept of AIR', link: '/air' },
        { title: 'Dept of IOTCSBC', link: '/pdf/iot_brochure.pdf' }
      ]
    },
    {
      title: 'Academics',
      items: [
        { title: 'RGPV Links', link: '/rgpv-links' },
        { title: 'Mandatory Disclosure', link: '/about-us/mandatory-disclosure' },
        { title: 'Governing Body Minutes', link: '/pdf/GoverningBodyMinutes.pdf' },
        { title: 'Employee Hand Book', link: '/pdf/EmployeeHandBook.pdf' },
        { title: 'Student Rule Book', link: '/pdf/student-rulebook.pdf' },
        { title: 'Service Book', link: '/pdf/Service_Book.pdf' }
      ]
    },
    { title: 'Training & Placement', link: '/placement' },
    {
      title: 'Research & Development',
      items: [
        { title: 'R&D Committee', link: '/' },
        {
          title: 'e-Journals',
          items: [
            { title: 'Delnet', link: 'http://delnet.in/' },
            { title: 'Springer', link: 'https://link.springer.com/' }
          ]
        },
        { title: 'Innovation-Teaching and Learning', link: '/innovation-teaching-and-learning-2021' }
      ]
    },
    {
      title: 'Events',
      items: [
        { title: 'Upcoming Events', link: '/pdf/Upcomingevents.pdf' },
        { title: 'FDP', link: '/upcoming-faculty-development-programmes' },
        { title: 'Seminars & Workshops', link: '/seminars-workshop' },
        {
          title: 'Conference',
          link: '/conferences',
          items: [
            { title: 'International Conference CSNT 2024', link: '/pdf/csnt.pdf' },
            { title: 'National Conference 2022', link: '/national-conference' },
            { title: 'ICIET 2020', link: '/iciet-2020' },
            { title: 'International Conference ICEMT2015', link: '/international-conference-icemt2015' },
            { title: 'IEEE International Conference CICN2015', link: '/ieee-international-conference-cicn2015' },
            { title: 'International Conference ICEMT 2013', link: '/international-conference-icemt-2013' },
            { title: 'National Conference 2012', link: '/national-conference-2012' },
            { title: 'National Conference 2011', link: '/national-conference-2011' }
          ]
        },
        { title: 'Cultural Events', link: '/gyanotsav-2019' },
        { title: 'Co-curricular', link: '/co-curricular-activities' }
      ]
    },
    { title: 'Contact Us', link: '/contact-us' },
    { title: 'e-Library', link: 'http://117.240.175.132:9091' },
    { title: 'Pharmacy College', link: '/Bpharma' },
    { title: 'Online Fee Payment', link: 'https://gyangangagroupfees.in/' },
    { 
      title: 'Moodle',
      link: 'https://gyangangamoodle.in',
      image: 'https://ggits.org/wp-content/uploads/2019/04/moodle-logo-2-min-48x12.png'
    }
  ];

  const renderDropdownItems = (items) => {
    return items.map((item, index) => {
      if (item.items) {
        return (
          <NavDropdown 
            key={index}
            title={item.title}
            id={`nested-dropdown-${index}`}
            className="nested-dropdown"
          >
            {renderDropdownItems(item.items)}
          </NavDropdown>
        );
      }
      return (
        <NavDropdown.Item 
          key={index} 
          as={item.link.startsWith('http') ? 'a' : Link}
          to={!item.link.startsWith('http') ? item.link : undefined}
          href={item.link.startsWith('http') ? item.link : undefined}
          target={item.link.startsWith('http') ? '_blank' : undefined}
        >
          {item.image ? (
            <>
              <span className="d-none">{item.title}</span>
              <img src={item.image} alt={item.title} style={{ height: '12px' }} />
            </>
          ) : (
            item.title
          )}
        </NavDropdown.Item>
      );
    });
  };

  return (
    <BootstrapNavbar expand="lg" className="py-0">
      <div className="container">
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" as="button" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} style={{ border: 'none', background: 'transparent', fontSize: '2rem' }}>
          <i className={`bi ${isMobileNavOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
        </BootstrapNavbar.Toggle>
        <BootstrapNavbar.Collapse id="basic-navbar-nav" in={isMobileNavOpen} onExited={() => setIsMobileNavOpen(false)}>
          <Nav id="top-menu-nav" className="mx-auto main-nav">
            {menuItems.map((item, index) => {
              if (item.items) {
                return (
                  <NavDropdown
                    key={index}
                    title={item.title}
                    id={`dropdown-${index}`}
                    show={activeDropdown === index}
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {renderDropdownItems(item.items)}
                  </NavDropdown>
                );
              }
              return (
                <Nav.Item key={index}>
                  {item.link.startsWith('http') ? (
                    <Nav.Link 
                      href={item.link} 
                      target="_blank"
                      className="nav-link"
                    >
                      {item.image ? (
                        <>
                          <span className="d-none">{item.title}</span>
                          <img src={item.image} alt={item.title} style={{ height: '12px' }} />
                        </>
                      ) : (
                        item.title
                      )}
                    </Nav.Link>
                  ) : (
                    <Nav.Link 
                      as={Link} 
                      to={item.link}
                      className="nav-link"
                    >
                      {item.title}
                    </Nav.Link>
                  )}
                </Nav.Item>
              );
            })}
          </Nav>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
