import React from 'react';
import { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';

import Feeds from './main/feeds';
import MainRight from './Main_right/Main-right';
import '../../../components/Nav/Nav.scss';
import './Main.scss';

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
