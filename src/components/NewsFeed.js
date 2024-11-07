import React, { useState, useEffect } from 'react';
import './NewsFeed.css';
import newsData from '../data/newsData';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(newsData.map(article => article.category))];

  useEffect(() => {
    // Load news data
    setArticles(newsData);
    setLoading(false);
  }, []);

  const handleLike = (articleId) => {
    setArticles(articles.map(article => 
      article.id === articleId 
        ? { ...article, likes: article.likes + 1 }
        : article
    ));
  };

  const handleComment = (articleId, comment) => {
    setArticles(articles.map(article => 
      article.id === articleId 
        ? { 
            ...article, 
            comments: [...article.comments, { id: Date.now(), text: comment }]
          }
        : article
    ));
  };

  if (loading) {
    return <div className="loading">Loading news...</div>;
  }

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="news-feed">
      <h2>Latest News in Design, Engineering & Technology</h2>
      
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="articles-container">
        {filteredArticles.map(article => (
          <div key={article.id} className="article-card">
            <h3>{article.title}</h3>
            <p className="article-description">{article.description}</p>
            <div className="article-metadata">
              <span className="category">{article.category}</span>
              <span className="date">{article.date}</span>
            </div>
            <div className="interaction-section">
              <button onClick={() => handleLike(article.id)} className="like-button">
                ❤️ {article.likes}
              </button>
              <div className="comments-section">
                <h4>Comments ({article.comments.length})</h4>
                {article.comments.map(comment => (
                  <div key={comment.id} className="comment">
                    <p>{comment.text}</p>
                    <span className="comment-timestamp">{new Date(comment.timestamp).toLocaleString()}</span>
                  </div>
                ))}
                <input
                  type="text"
                  placeholder="Add a comment..."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleComment(article.id, e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;