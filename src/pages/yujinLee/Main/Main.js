// import React from "react";
// import "./Main.scss"
import '../MyComponent/Header';
import Header from '../MyComponent/Header';
import Feed from '../MyComponent/Feed';
import './Main.scss';
import FriendProfile from '../MyComponent/FriendProfile';

const Main = () => {
  return (
    <div className="mainWrapper">
      <Header />
      <main>
        <article className="feedsContainer">
          <Feed />
        </article>
        <aside className="asideContainer">
          <header className="asideHeader">
            <img
              className="myProfileImg"
              src={require('../../assects/profile-02.png')}
              alt="나의 프로필사진"
            />
            <div className="myProfile">
              <div className="myProfileId">hellobear</div>
              <p calss="myProfileName">이유진</p>
            </div>
            <div className="checkout">
              <a href="#!">
                <p>전환</p>
              </a>
            </div>
          </header>
          <div className="friendRecommend">
            <span>회원님을 위한 추천</span>
            <a href="#!">
              <span>모두 보기</span>
            </a>
          </div>
          <ul>
            <FriendProfile />
            <FriendProfile />
            <FriendProfile />
            <FriendProfile />
            <FriendProfile />
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default Main;
