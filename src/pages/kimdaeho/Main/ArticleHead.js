import React from 'react';
import '../Main/ArticleHead.scss';

function ArticleHead() {
  return (
    <div className="article_header">
      <img src="../images/kimdaeho/articleProfile.jpeg" alt="article_Profile" />
      <div className="article_header_text">
        <h2>antddunddun</h2>
        <p>WeCode-위코드</p>
      </div>
      <div className="article_add_menu">
        <a className="link" href="#!">
          ...
        </a>
      </div>
    </div>
  );
}

export default ArticleHead;
