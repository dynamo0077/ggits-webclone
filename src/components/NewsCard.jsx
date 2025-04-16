import React from 'react';
import './NewsCard.css';

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      {news.image && (
        <div className="news-card-image">
          <img src={news.image} alt={news.title} />
        </div>
      )}
      <div className="news-card-body">
        <h3 className="news-card-title">{news.title}</h3>
        <p className="news-card-excerpt">{news.excerpt}</p>
        <a href={news.link} className="news-card-link" target="_blank" rel="noopener noreferrer">read more</a>
      </div>
    </div>
  );
};

export default NewsCard;
