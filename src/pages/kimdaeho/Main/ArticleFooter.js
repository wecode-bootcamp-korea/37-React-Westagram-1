import React, { useState } from 'react';
import '../Main/ArticleFooter.scss';
import { useEffect } from 'react';

function ArticleFooter() {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]);

  const addItem = () => {
    setCommentList([...commentList, inputValue]);
    setInputValue('');
  };

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setFeedItem(result));
  }, []);

  const [feedItem, setFeedItem] = useState([]);

  return (
    <div className="article_footer">
      <div className="article_footer_icon">
        <img src="../images/kimdaeho/1.png" alt="like" />
        <img src="../images/kimdaeho/2.png" alt="messeage" />
        <img src="../images/kimdaeho/3.png" alt="share" />
      </div>
      <div className="article_footer_attention">
        <img src="../images/kimdaeho/attention.jpeg" alt="attention_photo" />
        <p>
          <a href="#!">daeho_773</a>님 외 <a href="#!">4명이</a> 좋아합니다.
        </p>
      </div>
      <div className="article_footer_explanation">
        <p>
          <a href="#!">ant_ddunddun</a>포메라니안이 세상을 구한다🥺
        </p>
        <p id="explanation_time">55분 전</p>
        <ul>
          {commentList.map((comment, index) => (
            <p key={index}>
              <a href="#!">ant_ddunddun</a>
              {comment}
              <span>♡</span>
            </p>
          ))}
        </ul>
      </div>
      <form className="artice_footer_comment">
        <a href="#!" onClick={addItem}>
          게시
        </a>
        <input
          id="commnet_input"
          type="text"
          placeholder="댓글 달기..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default ArticleFooter;
