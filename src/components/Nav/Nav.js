const Nav = () => {
  return (
    <header>
      <div className="wrap">
        <h1 className="logo">Westagram</h1>
        <input className="search" type="text" placeholder="검색" />
        <ul className="icon-wrap">
          <li>
            <i className="fa-regular fa-compass" />
          </li>
          <li>
            <i className="fa-regular fa-heart" />
          </li>
          <li>
            <i className="fa-regular fa-user" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
