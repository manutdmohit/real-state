import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <button onClick={() => (window.location.href = '/')}>Go Home</button>
    </div>
  );
};

export default NotFound;
