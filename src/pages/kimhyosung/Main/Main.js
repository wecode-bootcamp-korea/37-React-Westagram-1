import React from 'react';
import Nav from './Nav/Nav';
import './Main.scss';
import { useState, useEffect } from 'react';
import Comment from './comment';
import Feeds from './main/feeds';
import MainRight from './Main_right/Main-right';
const Main = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeed(data);
      });
  }, []);

  return (
    <div>
      <Nav />
      <div id="main">
        <div>
          {feed.map(e => (
            <Feeds
              id={e.id}
              userName={e.user_name}
              userImageBg={e.userImageBg}
              userImage={e.user_image}
            />
          ))}
        </div>

        <MainRight feed={feed} />
      </div>
    </div>
  );
};
export default Main;
