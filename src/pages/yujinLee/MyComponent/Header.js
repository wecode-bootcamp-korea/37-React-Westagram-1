import React from 'react';
import './Header.scss';
import 'font-awesome/css/font-awesome.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const Header = () => {
  return (
    <header className="header">
      <div className="navWrapper">
        <h1 className="logo">westagram</h1>
        <form className="search" name="friend-search" action="">
          <input type="text" placeholder="&#xf002;  검색" />
        </form>
        <ul className="headerIconList">
          <li>
            <a href="#!">
              <i className="fa-solid fa-house icon" />
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fa-regular fa-paper-plane icon" />
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fa-regular fa-square-plus icon" />
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fa-regular fa-compass icon" />
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fa-regular fa-heart icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
