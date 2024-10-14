import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
        <ul class="navbar">
            <li><Link to="/" className="text-lg">Home</Link></li>
            <li><Link to="/about" className="text-lg">About</Link></li>
            <li><Link to="/skills" className="text-lg">Skills</Link></li>
            <li><Link to="/projects" className="text-lg">Projects</Link></li>
            <li><Link to="/contact" className="text-lg">Contact</Link></li>
        </ul>
    </nav>
  )
}
