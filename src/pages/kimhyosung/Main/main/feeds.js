import React, { useState } from 'react';
import FeedsContent from './feeds_article/feeds_content';

function Feeds({ id, userName, userImageBg, userImage }) {
  const [입력값, 입력값변경] = useState('');
  const [입력값들, 입력값들변경] = useState([]);
  const [count, setCount] = useState(24);
  const [change, setChange] = useState(false);

  const handleClick = e => {
    let copy = [...입력값들];
    copy.splice(e, 1);
    입력값들변경(copy);
  };

  const inputSubmitted = e => {
    e.preventDefault();
    let copy = [...입력값들];
    copy.unshift(입력값);
    입력값들변경(copy);

    입력값변경('');
  };
  return (
    <div id="feeds">
      <article id="article">
        <div className="article_header">
          <div className="header_content">
            <img className="header_image" src={userImage} alt="pho1" />
            <span className="user_name">{userName}</span>
          </div>
        </div>

        <div className="article_image">
          <img className="image_content" src={userImageBg} alt="pho1" />
        </div>

        <div className="article_icon">
          <div className="icon_wrap">
            <div className="icon_3">
              <i
                onClick={() => {
                  change ? setCount(count - 1) : setCount(count + 1);
                  setChange(!change);
                }}
                className={change ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}
                // style={{ color: change }}
              />
              <i className="fa-regular fa-comment-dots" />
              <i className="fa-regular fa-paper-plane" />
            </div>
          </div>

          <div className="icon_1">
            <i className="fa-regular fa-bookmark" />
          </div>
        </div>

        <div className="article_content">
          <img className="header_image" src={userImage} alt="pho1" />
          <div className="article_content_header">
            <span>
              <strong>{userName}</strong>님 외 <strong>{count}</strong>
              명이 좋아합니다
            </span>
          </div>
        </div>
        <div className="article_content_all">
          <div className="article_content_main">
            <div className="reply_text">
              <p className="name">
                <strong>{userName}</strong>
              </p>
              <span className="content">
                …shop our fall collection’s first delivery
              </span>
              <button className="heart fa-regular fa-heart" />
              <button className="delete fa-solid fa-trash" />
            </div>
          </div>
          <div className="reply_wrap">
            <div>
              {입력값들.map((a, i) => {
                return (
                  <FeedsContent
                    key={i}
                    a={a}
                    i={i}
                    입력값들={입력값들}
                    입력값들변경={입력값들변경}
                    입력값={입력값}
                    입력값변경={입력값변경}
                    inputSubmitted={inputSubmitted}
                    handleClick={() => handleClick(a)}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="inputText">
          <form onSubmit={inputSubmitted} className="inputwrap">
            <input
              onChange={e => {
                입력값변경(e.target.value);
              }}
              className="reply"
              type="text"
              placeholder="댓글"
              value={입력값}
            />
            <button className="btn">게시</button>
          </form>
        </div>
      </article>
    </div>
  );
}

export default Feeds;
