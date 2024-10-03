
import React from 'react';
import { Link } from 'react-router-dom'; 

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/movies">Filmes</Link> 
        </li>
        <li>
          <a href="/react-single">React Single</a> 
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
