import React from 'react';
import './App.css';
import NewsFeed from './components/NewsFeed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tech News Hub</h1>
      </header>
      <main>
        <NewsFeed />
      </main>
    </div>
  );
}

export default App;
