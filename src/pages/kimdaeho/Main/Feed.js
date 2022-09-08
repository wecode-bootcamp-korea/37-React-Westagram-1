import React from 'react';
import { useEffect, useState } from 'react';
import '../Main/Feed.scss';
import ArticleFooter from './ArticleFooter';

function Feed() {
  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setFeedItem(result));
  }, []);

  const [feedItem, setFeedItem] = useState([]);

  return (
    <div>
      {feedItem.map(item => {
        return (
          <div className="feeds" key={item.id}>
            <div className="Feed_header">
              <img src={item.profile_img} alt="article_Profile" />
              <div className="article_header_text">
                <h2>{item.nickname}</h2>
                <p>{item.place}</p>
              </div>
              <div className="article_add_menu">
                <a className="link" href="#!" alt="test">
                  ...
                </a>
              </div>
            </div>
            <img
              className="article_main"
              src={item.main_img}
              alt="article_main"
            />
            <ArticleFooter />
          </div>
        );
      })}
    </div>
  );
}

export default Feed;
