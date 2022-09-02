import React from 'react';
import './Main.scss';
const Main = () => {
  return (
    <div>
      <div className="all">
        <nav id="navigator">
          <div className="nav1">
            <i className="fa-brands fa-instagram"></i> | instagram
          </div>

          <div className="nav2">
            <input className="search" placeholder="검색" />

            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="nav3">
            <i className="fa-solid fa-compass"></i>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-user-group"></i>
          </div>
        </nav>
      </div>

      <div id="main">
        <div id="feeds">
          <article id="article">
            <div className="article_header">
              <div className="header_content">
                <img
                  className="header_image"
                  src="./images/image1.png"
                  alt="pho1"
                />
                <span className="user_name">jerrylolenzo</span>
              </div>
            </div>

            <div className="article_image">
              <img
                className="image_content"
                src="./images/image2.png"
                alt="pho1"
              />
            </div>

            <div className="article_icon">
              <div className="icon_wrap">
                <div className="icon_3">
                  <i className="fa-solid fa-heart"></i>
                  <i className="fa-solid fa-comment-dots"></i>
                  <i className="fa-solid fa-paper-plane"></i>
                </div>
              </div>

              <div className="icon_1">
                <i className="fa-solid fa-bookmark"></i>
              </div>
            </div>

            <div className="article_content">
              <img
                className="header_image"
                src="./images/image1.png"
                alt="pho1"
              />
              <div className="article_content_header">
                <span>
                  <strong>jerrylolenzo</strong>님 외 <strong>4</strong>명이
                  좋아합니다
                </span>
              </div>
            </div>

            <div className="article_content_main">
              <div className="reply_text">
                <p className="name">
                  <strong>jerrylolenzo</strong>
                </p>
                <span className="content">
                  …shop our fall collection’s first delivery exclusively
                  @fearofgod .com, wednesday 8.24.22… contemplated hues, shapes,
                  fabrics… just in time for the season 🍂
                </span>
              </div>
            </div>

            <div className="reply_text"></div>

            <div className="inputText">
              <div className="inputwrap">
                <input className="reply" type="text" placeholder="댓글" />
                <button className="btn">게시</button>
              </div>
            </div>
          </article>
        </div>

        <div id="main-right">
          <div className="right">
            <div className="me">
              <img
                className="header_image"
                src="./images/image1.png"
                alt="pho1"
              />
              <span className="user_name">jerrylolenzo</span>
            </div>
          </div>

          <div className="right-content">
            <div className="story">
              <div className="story_content">
                <span id="story">스토리</span>
                <span id="look">
                  <strong>모두보기</strong>
                </span>
              </div>

              <div className="content-wrap">
                <div className="content1">
                  {' '}
                  <img
                    className="header_image"
                    src="./images/image1.png"
                    alt="pho1"
                  />
                  <span className="user_name">jerrylolenzo</span>{' '}
                </div>
                <div className="content1">
                  {' '}
                  <img
                    className="header_image"
                    src="./images/image1.png"
                    alt="pho1"
                  />
                  <span className="user_name">jerrylolenzo</span>
                </div>
                <div className="content1">
                  {' '}
                  <img
                    className="header_image"
                    src="./images/image1.png"
                    alt="pho1"
                  />
                  <span className="user_name">jerrylolenzo</span>
                </div>
                <div className="content1">
                  {' '}
                  <img
                    className="header_image"
                    src="./images/image1.png"
                    alt="pho1"
                  />
                  <span className="user_name">jerrylolenzo</span>
                </div>
                <div className="content1">
                  {' '}
                  <img
                    className="header_image"
                    src="./images/image1.png"
                    alt="pho1"
                  />
                  <span className="user_name">jerrylolenzo</span>
                </div>
              </div>

              <div className="recommend">
                <div className="recommend-header">
                  <span>회원님을 위한 추천</span>
                  <span>
                    <strong>모두보기</strong>
                  </span>
                </div>

                <div className="recommend-wrap">
                  <img
                    className="header_image"
                    src="./images/image1.png"
                    alt="pho1"
                  />
                  <span className="user_name2">jerrylolenzo</span>

                  <span className="follow">팔로우</span>
                </div>

                <div className="recommend-wrap">
                  <img
                    className="header_image"
                    src="./images/image1.png"
                    alt="pho1"
                  />
                  <span className="user_name2">jerrylolenzo</span>

                  <span className="follow">팔로우</span>
                </div>

                <div className="recommend-wrap">
                  <img
                    className="header_image"
                    src="./images/image1.png"
                    alt="pho1"
                  />
                  <span className="user_name2">jerrylolenzo</span>

                  <span className="follow">팔로우</span>
                </div>

                <div className="recommend-wrap">
                  <img
                    className="header_image"
                    src="./images/image1.png"
                    alt="pho1"
                  />
                  <span className="user_name2">jerrylolenzo</span>

                  <span className="follow">팔로우</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
