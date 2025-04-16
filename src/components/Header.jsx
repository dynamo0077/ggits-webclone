import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <header id="main-header" data-height-onload="78">
      <div id="header-topbar" style={{ backgroundColor: 'var(--ggits-primary)' }}>
        <Container>
          <div id="header-contact">
            <span id="header-phone" className="me-4">
              <i className="icon-phone me-1"></i>
              9425323089, 9893556449
            </span>
            <a href="mailto:contact@ggits.org" className="text-white text-decoration-none">
              <span id="header-email">
                <i className="icon-envelope me-1"></i>
                contact@ggits.org
              </span>
            </a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div className="header-logo">
            <Link to="/">
              <img
                src="https://ggits.org/wp-content/uploads/2019/03/headerLogoChanged-e1554216558776.png"
                alt="Gyan Ganga"
                id="header-logo-img"
                style={{ width: '205px', height: '100px', objectFit: 'contain', background: '#fff', borderRadius: '0px', padding: '0px' }}
              />
            </Link>
          </div>

          <nav id="header-nav" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Navbar />
            <div id="header-search" style={{ marginLeft: '24px', display: 'flex', alignItems: 'center' }}>
              <span
                id="header-search-icon"
                className="icon-search"
                aria-label="Open search"
                style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                onClick={() => setIsSearchVisible(true)}
              />
            </div>
          </nav>
        </div>
      </Container>

      {isSearchVisible && (
        <div className="header-search-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(0,0,0,0.15)', zIndex: 1200 }}>
          <Container className="et_search_form_container mt-3" style={{ position: 'relative', maxWidth: 600 }}>
            <form role="search" method="get" className="et-search-form d-flex align-items-center" action="/" style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '0.5rem 1rem', width: '100%' }}>
              <input
                type="search"
                className="et-search-field form-control border-0"
                placeholder="Search …"
                name="s"
                title="Search for:"
                autoFocus
                style={{ flex: 1, fontSize: '1.1rem', background: 'transparent' }}
              />
              <button
                type="button"
                className="btn btn-link et_close_search_field p-0 ms-2"
                aria-label="Close search"
                onClick={() => setIsSearchVisible(false)}
                style={{ fontSize: '1.5rem', color: '#e53935' }}
              >
                <i className="icon-close"></i>
              </button>
            </form>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;


