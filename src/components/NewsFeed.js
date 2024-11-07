import React, { useState, useEffect, useMemo } from 'react';
import './NewsFeed.css';
import newsData from '../data/newsData';
import { FiBookmark, FiShare2, FiClock, FiTrendingUp, FiSearch, FiHeart } from 'react-icons/fi';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Calculate categories and trending articles
  const categories = useMemo(() => 
    ['All', ...new Set(newsData.map(article => article.category))],
    []
  );

  const trendingArticles = useMemo(() =>
    [...newsData].sort((a, b) => b.likes - a.likes).slice(0, 3),
    []
  );

  // Load initial data
  useEffect(() => {
    setArticles(newsData);
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
    setLoading(false);
  }, []);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Calculate read time for an article
  const getReadTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Handle user interactions
  const handleLike = (articleId) => {
    setArticles(articles.map(article => 
      article.id === articleId 
        ? { ...article, likes: article.likes + 1 }
        : article
    ));
  };

  const handleBookmark = (articleId) => {
    if (bookmarks.includes(articleId)) {
      setBookmarks(bookmarks.filter(id => id !== articleId));
    } else {
      setBookmarks([...bookmarks, articleId]);
    }
  };

  const handleShare = async (article) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: article.sourceUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(`${article.title}\n${article.description}\n${article.sourceUrl}`);
    }
  };

  const handleComment = (articleId, comment) => {
    setArticles(articles.map(article => 
      article.id === articleId 
        ? { 
            ...article, 
            comments: [...article.comments, { id: Date.now(), text: comment, timestamp: new Date().toISOString() }]
          }
        : article
    ));
  };

  // Filter and search articles
  const filteredArticles = useMemo(() => {
    let filtered = articles;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchLower) ||
        article.description.toLowerCase().includes(searchLower) ||
        article.category.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [articles, selectedCategory, searchTerm]);

  if (loading) {
    return <div className="loading">Loading news...</div>;
  }

  return (
    <div className="news-feed">
      <header className="news-feed-header">
        <h1>Tech News Hub</h1>
        <div className="search-bar">
          <FiSearch />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <section className="trending-section">
        <h2><FiTrendingUp /> Trending Now</h2>
        <div className="trending-articles">
          {trendingArticles.map(article => (
            <div key={article.id} className="trending-card">
              <h3>{article.title}</h3>
              <span className="trending-meta">
                <FiHeart /> {article.likes} · {article.category}
              </span>
            </div>
          ))}
        </div>
      </section>

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

      <div className={`articles-container ${viewMode}`}>
        {filteredArticles.map(article => (
          <article key={article.id} className="article-card">
            <div className="article-header">
              <span className="category-tag">{article.category}</span>
              <div className="article-actions">
                <button 
                  className={`bookmark-button ${bookmarks.includes(article.id) ? 'active' : ''}`}
                  onClick={() => handleBookmark(article.id)}
                >
                  <FiBookmark />
                </button>
                <button onClick={() => handleShare(article)}>
                  <FiShare2 />
                </button>
              </div>
            </div>

            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              
              <div className="article-meta">
                <span className="read-time">
                  <FiClock /> {getReadTime(article.description)}
                </span>
                <span className="date">{article.date}</span>
              </div>

              <div className="source-section">
                <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-link">
                  {article.source}
                </a>
                <div className="related-links">
                  {article.relatedLinks.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>

              <div className="interaction-section">
                <button 
                  onClick={() => handleLike(article.id)} 
                  className="like-button"
                >
                  <FiHeart className={article.likes > 0 ? 'liked' : ''} />
                  <span>{article.likes}</span>
                </button>

                <div className="comments-section">
                  <h4>Comments ({article.comments.length})</h4>
                  <div className="comments-list">
                    {article.comments.map(comment => (
                      <div key={comment.id} className="comment">
                        <p>{comment.text}</p>
                        <time>{new Date(comment.timestamp).toLocaleString()}</time>
                      </div>
                    ))}
                  </div>
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
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;