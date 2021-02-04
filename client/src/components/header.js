import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>Infinity.</div>
        <nav>
          <ul>
            <li className='discover'>
<<<<<<< HEAD
              <a href='/discover'>discover</a>
            </li>
            <li className='solarscope'>
              <a href='/solarscope'>Explore Solar System</a>
            </li>
            <li className='apod'>
              <a href='/apod'>Your astronomical birthday</a>
            </li>
=======
              <a href='/game'>discover</a>
            </li>
            
>>>>>>> 7e5cf2a4a6f868866c2300aa525cba7bcb9c6638
            <li>
              <a href='/message'>Send message</a>
              {/* <Link to="/message">Message</Link> */}
            </li>
            <li className='quiz'>
              <a href='/quiz'>Astronomical Quiz</a>
            </li>
            <li className='btn'>
              <a href='/'>Log In</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}