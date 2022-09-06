import React from 'react';
import '../Main/Main.scss';
import ArticleHead from './ArticleHead';
import ArticleFooter from './ArticleFooter';
import MainRightList from './MainRightList';

function Main() {
  return (
    <>
      <nav className="nav">
        <div className="nav_logo">
          <img src="../images/kimdaeho/instagram.png" alt="logo" />
          <h1>Westagram</h1>
        </div>
        <div className="nav_search">
          <input className="nav_search_input" type="text" placeholder="검색" />
        </div>
        <div className="nav_profile">
          <img src="../images/kimdaeho/explore.png" alt="profile_icon1" />
          <img src="../images/kimdaeho/1.png" alt="profile_icon2" />
          <img src="../images/kimdaeho/profile.png" alt="profile_icon3" />
        </div>
      </nav>
      <main>
        <div className="feeds">
          <ArticleHead />
          <img
            className="article_main"
            src="../images/kimdaeho/articleMain.png"
            alt="article_main"
          />
          <ArticleFooter />
        </div>
        <div className="main_right">
          <div className="main_right_profile">
            <img
              src="../images/kimdaeho/articleProfile.jpeg"
              alt="main_right_Profile"
            />
            <div className="right_profile_view">
              <h3>ant_ddunddun</h3>
              <p>Wecode | 위코드</p>
            </div>
          </div>
          <MainRightList />
        </div>
      </main>
    </>
  );
}

export default Main;
