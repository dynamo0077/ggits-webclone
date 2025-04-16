import React from 'react';
import Carousel from '../components/Carousel';
import NewsSection from '../components/NewsSection';
import EventsSection from '../components/EventsSection';
import AcademicsSection from '../components/AcademicsSection';
import StreamsSection from '../components/StreamsSection';
import MouTieupsSection from '../components/MouTieupsSection';

const Home = () => {
  const carouselImages = [
    '/images/campus1.jpg',
    '/images/campus2.jpg',
    '/images/campus3.jpg',
  ];

  return (
    <main className="home-page">
      <Carousel images={carouselImages} />
      <NewsSection />
      <EventsSection />
      <AcademicsSection />
      <StreamsSection />
      <MouTieupsSection />
    </main>
  );
};

export default Home;
