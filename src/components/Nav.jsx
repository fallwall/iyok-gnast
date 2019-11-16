import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-selection">
      <Link to="/"> Work </Link>
      <Link to="/about"> About </Link>
      <Link to="/contact"> Contact </Link>
      <Link to="/inspiration"> Inspiration </Link>
      </div>
      <div className="nav-title">
        <Link to="Work"> Koyi Tsang</Link>
      </div>
    </div>
  )
}
