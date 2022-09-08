import React from 'react';

function Nav(props) {
  return (
    <div className="all">
      <nav className="navigator">
        <div className="nav1">
          <i className="fa-brands fa-instagram"></i> | instagram
        </div>

        <div className="nav2">
          <input className="search" placeholder="검색" />

          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="nav3">
          <i className="fa-solid fa-compass"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-user-group"></i>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
