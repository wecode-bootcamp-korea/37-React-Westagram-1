import React from "react";
import { useState } from "react";

import "./Main.scss";

let nextId = 1;

const Main = () => {
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onInsertComment = text => {
    const comment = {
      id: nextId,
      name: "sujiny_829",
      text,
    };
    setComments(comments => comments.concat(comment));
    nextId++;
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsertComment(value);
    setValue("");
  };

  return (
    <>
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
              <button className="profile-box">
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
      <main className="container">
        <section className="feeds">
          <article>
            <div className="profile">
              <div className="profile-box">
                <img
                  className="profile-image"
                  src="./images/sujinAhn/feed01.jpg"
                  alt="프로필사진"
                />
                <span className="id">sujiny_829</span>
              </div>
              <button>
                <i className="fa-solid fa-ellipsis" />
              </button>
            </div>
            <div className="picture-area">
              <img src="./images/sujinAhn/feed01.jpg" alt="피드" />
            </div>
            <div className="info-area">
              <div className="icon-wrap">
                {/* <button><i className="fa-regular fa-heart"></i></button> */}
                <button>
                  <i className="fa-solid fa-heart on" />
                </button>
                <button>
                  <i className="fa-regular fa-comment" />
                </button>
                <button>
                  <i className="fa-solid fa-arrow-up-from-bracket" />
                </button>
                <button>
                  <i className="fa-regular fa-bookmark" />
                </button>
              </div>
              <p className="like-number">
                <img
                  className="profile-image small"
                  src="./images/sujinAhn/feed01.jpg"
                  alt="프로필사진"
                />
                <span className="id">abc1234</span>님 외 <span>10명</span>이
                좋아합니다.
              </p>
              <div className="post-box">
                <p className="post hide">
                  <span className="id">sujiny_829</span>강아지 귀엽다.강아지
                  귀엽다.강아지 귀엽다.강아지 귀엽다.강아지 귀엽다.강아지
                  귀엽다.강아지 귀엽다.
                </p>
                <button className="btn-more">더보기</button>
              </div>
            </div>
            <div className="comment-area">
              <ul className="comment-list">
                {comments.map(list => (
                  <li key={list.id}>
                    <span className="id">{list.name}</span>
                    <p className="comment-text">{list.text}</p>
                    <button className="btn-like">
                      <i className="fa-regular fa-heart" />
                    </button>
                    <button className="btn-delete">
                      <i className="fa-solid fa-trash-can" />
                    </button>
                  </li>
                ))}
              </ul>
              <form>
                <div className="input-area">
                  <input
                    type="text"
                    placeholder="댓글달기"
                    value={value}
                    onChange={onChange}
                  />
                  <button
                    className="btn-push"
                    onClick={onSubmit}
                    disabled={!value ? true : false}
                  >
                    게시
                  </button>
                </div>
              </form>
            </div>
          </article>
        </section>
        <section className="etc">
          <div className="profile">
            <img
              className="profile-image large"
              src="./images/sujinAhn/feed01.jpg"
              alt="프로필사진"
            />
            <div className="profile-box">
              <p className="id">sujiny_829</p>
              <p className="name">안수진</p>
            </div>
          </div>
          <div className="etc-box scroll">
            <div className="title-wrap">
              <p className="title">스토리</p>
              <button className="btn-all">모두 보기</button>
            </div>
            <ul className="other-user">
              <li>
                <div className="profile small">
                  <img
                    className="profile-image story"
                    src="./images/sujinAhn/feed01.jpg"
                    alt="프로필사진"
                  />
                  <div className="profile-box">
                    <p className="id">sujiny_829</p>
                    <p className="time">16분 전</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="profile small">
                  <img
                    className="profile-image story"
                    src="./images/sujinAhn/feed01.jpg"
                    alt="프로필사진"
                  />
                  <div className="profile-box">
                    <p className="id">sujiny_829</p>
                    <p className="time">16분 전</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="profile small">
                  <img
                    className="profile-image story"
                    src="./images/sujinAhn/feed01.jpg"
                    alt="프로필사진"
                  />
                  <div className="profile-box">
                    <p className="id">sujiny_829</p>
                    <p className="time">16분 전</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="profile small">
                  <img
                    className="profile-image story"
                    src="./images/sujinAhn/feed01.jpg"
                    alt="프로필사진"
                  />
                  <div className="profile-box">
                    <p className="id">sujiny_829</p>
                    <p className="time">16분 전</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="profile small">
                  <img
                    className="profile-image story"
                    src="./images/sujinAhn/feed01.jpg"
                    alt="프로필사진"
                  />
                  <div className="profile-box">
                    <p className="id">sujiny_829</p>
                    <p className="time">16분 전</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="etc-box">
            <div className="title-wrap">
              <p className="title">회원님을 위한 추천</p>
              <button className="btn-all">모두 보기</button>
            </div>
            <ul className="other-user">
              <li>
                <div className="profile small">
                  <img
                    className="profile-image"
                    src="./images/sujinAhn/feed01.jpg"
                    alt="프로필사진"
                  />
                  <div className="profile-box">
                    <p className="id">abc_1234</p>
                    <p className="friend">
                      sjdnk_859님 외 3명이 알고 있습니다다따다다다다
                    </p>
                  </div>
                </div>
                <button className="btn-push">팔로우</button>
              </li>
              <li>
                <div className="profile small">
                  <img
                    className="profile-image"
                    src="./images/sujinAhn/feed01.jpg"
                    alt="프로필사진"
                  />
                  <div className="profile-box">
                    <p className="id">abc_1234</p>
                    <p className="friend">
                      sjdnk_859님 외 3명이 알고 있습니다다따다다다다
                    </p>
                  </div>
                </div>
                <button className="btn-push">팔로우</button>
              </li>
              <li>
                <div className="profile small">
                  <img
                    className="profile-image"
                    src="./images/sujinAhn/feed01.jpg"
                    alt="프로필사진"
                  />
                  <div className="profile-box">
                    <p className="id">abc_1234</p>
                    <p className="friend">
                      sjdnk_859님 외 3명이 알고 있습니다다따다다다다
                    </p>
                  </div>
                </div>
                <button className="btn-push">팔로우</button>
              </li>
            </ul>
          </div>
          <div className="footer">
            <div className="text">
              westagram<p>소개</p>
              <p>도움말</p>
              <p>홍보 센터</p>
              <p>API </p>
              <p>채용 정보</p>
              <p>개인정보처리방침</p>
              <p>약관</p>
              <p>위치</p>
              <p>언어</p>
            </div>
            <p className="text">© 2022 INSTAGRAM FROM META</p>
          </div>
        </section>
      </main>
      <div className="dim-layer mypage">
        <div className="dim-bg" />
        <div className="modal">
          <p className="my-profile">프로필</p>
          <p className="save-list">저장됨</p>
          <p className="setting">설정</p>
          <p className="logout">로그아웃</p>
        </div>
      </div>
      <div className="dim-layer search-results">
        <div className="dim-bg" />
        <ul className="modal">
          <li className="result">
            <img src="./images/sujinAhn/feed01.jpg" alt="강아지" />
            <p>
              <span className="nickname">wecode_bootcamp</span>
              <span className="myname">부트캠프</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Main;
