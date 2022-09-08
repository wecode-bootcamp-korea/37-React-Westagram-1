import React from 'react';
// import { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import ArticleHead from './ArticleHead';
import ArticleFooter from './ArticleFooter';
import MainRightList from './MainRightList';
import '../Main/Main.scss';
import Aside from './Aside';
import Feed from './Feed';

function Main() {
  // const [feedItem, setFeedItem] = useState([]);

  // useEffect(() => {
  //   fetch('/data/data.json')
  //     .then(response => response.json())
  //     .then(result => setFeedItem(result));
  // }, []);

  return (
    <>
      <Nav />
      <main>
        <div className="feed_list">
          <div className="feeds">
            <ArticleHead />
            <img
              className="article_main"
              src="../images/kimdaeho/articleMain.png"
              alt="article_main"
            />
            <ArticleFooter />
          </div>
          <Feed />
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
          <Aside />
        </div>
      </main>
    </>
  );
}

export default Main;
