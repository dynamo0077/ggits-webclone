import React from 'react';

const HeroSlider = () => {
  const scrollToNextSection = (e) => {
    e.preventDefault();
    const nextSection = document.querySelector('.explore-slider');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="et_pb_fullwidth_header">
      <div className="et_pb_fullwidth_header_container center">
        <div className="header-content-container center">
          <div className="header-content">
            <img 
              decoding="async" 
              src="https://ggits.org/wp-content/uploads/2018/12/logo_ggits.png"
              title="" 
              alt="" 
              srcSet="https://ggits.org/wp-content/uploads/2018/12/logo_ggits.png 180w, https://ggits.org/wp-content/uploads/2018/12/logo_ggits-150x150.png 150w" 
              sizes="(max-width: 180px) 100vw, 180px" 
              className="header-logo"
            />
            
            <div className="et_pb_header_content_wrapper"></div>
            <a 
              className="et_pb_button et_pb_custom_button_icon et_pb_more_button et_pb_button_primary" 
              href="https://tinyurl.com/ggitsadmission2024" 
              data-icon="G"
            >
              Admission Enquiry
            </a>
            <a 
              className="et_pb_button et_pb_more_button et_pb_button_secondary" 
              href="https://ggits.org/enewsletter/"
            >
              eNewsletter-The Genesis
            </a>
          </div>
        </div>
      </div>
      <div className="et_pb_fullwidth_header_overlay"></div>
      <div className="et_pb_fullwidth_header_scroll">
        <a href="#" className="scroll-down-container" onClick={scrollToNextSection}>
          <span className="scroll-down">↓</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSlider;
