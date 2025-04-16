import React from 'react';
import NewsCard from './NewsCard';
import './NewsSection.css';

const newsItems = [
  {
    id: 1,
    title: 'IEEE International Conference CSNT 2024',
    excerpt: 'The International Conference on Communication Systems and Network Technologies (CSNT-2024) is organized IEEE Madhya Pradesh Section as its Flagship and hosted by Gyan Ganga Institute of Technology Jabalpur and MIR Labs, Gwalior, with technical support of IETE Gwalior...',
    image: null,
    link: 'https://ggits.org/ieee-international-conference-csnt-2024/'
  },
  {
    id: 2,
    title: 'Internal Smart India Hackathon 2023',
    excerpt: 'Internal Smart India Hackathon 2023',
    image: null,
    link: 'https://ggits.org/internal-smart-india-hackathon-2023/'
  },
  {
    id: 3,
    title: 'Faculty Development Programme on Research Methodology Tools and Techniques',
    excerpt: 'OBJECTIVE:- In this program, participants will be subjected to different facets of writing, commencing with problem definition to sharing their published work in front of a larger audience. The program participants will learn how to use and analyze data which will...',
    image: null,
    link: 'https://ggits.org/faculty-development-programme-on-research-methodology-tools-and-techniques/'
  },
  {
    id: 4,
    title: 'Smart India Hackathon 2022 Winners',
    excerpt: 'Smart India Hackathon 2022 Proud Moment for Gyan Ganga Group and Jabalpur. 3 Teams won in the Sixth edition of Smart India Hackathon 2022 organized by MHRD, AICTE, i4C, AWS, Shell and Persistent Systems at different locations. For this time all the 3 teams won first...',
    image: 'https://ggits.org/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-26-at-22.12.01-1-400x250.jpeg',
    link: 'https://ggits.org/sih-2022/'
  },
  {
    id: 5,
    title: 'IMAGINE CUP WINNERS 2021 (Gyan Ganga Best College For Engineering in MP)',
    excerpt: '',
    image: 'https://ggits.org/wp-content/uploads/2022/04/Screenshot-70-1-400x250.png',
    link: 'https://ggits.org/imagine-cup-winners-2021/'
  },
  {
    id: 6,
    title: 'Won First Price in MANTHAN-2021, National Technical Event.',
    excerpt: 'Won First Price in MANTHAN-2021, National Technical Event. Our IT team of 5th sem won First Price of Rs 1 lac for MANTHAN-2021 Grand Finale, which is a National level hackathon. Our team\'s title was identification of Crime in Prone Areas. Congratulations team IT...',
    image: 'https://ggits.org/wp-content/uploads/2021/12/Manthan-2021-Grand-FInale-winners-400x250.jpeg',
    link: 'https://ggits.org/won-first-price-in-manthan-2021-national-technical-event/'
  }
];

const NewsSection = () => {
  return (
    <section className="news-section-custom">
      <h1 className="news-section-title">Latest News</h1>
      <div className="news-grid">
        {newsItems.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
      <div className="news-section-bottom">
        <a href="/news-blog?page=2" className="news-older-entries">« Older Entries</a>
        <div className="news-section-btn-wrapper">
          <a href="/news-blog" target="_blank" rel="noopener noreferrer" className="news-section-btn">
            View More News
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
