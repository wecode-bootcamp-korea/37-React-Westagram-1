const Header = ({ toggleModal }) => {
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
          <li>
            <button className="profile-box" onClick={toggleModal}>
              <img
                className="profile-image"
                src="./images/sujinAhn/feed01.jpg"
                alt="프로필사진"
              />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
