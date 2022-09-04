import './friendProfile.scss';
// import { useState } from 'react';

const FriendProfile = () => {
  return (
    <li className="friendsParts">
      <img
        className="friendProfileImg"
        src={require('../../assects/profile-05.png')}
        alt="내프로필사진"
      />
      <div className="friendProfile">
        <div className="friendProfileName">noName</div>
        <div className="friendProfileDes">인기</div>
      </div>
      <span>
        <a href="#!">
          <p className="followBtn">팔로우</p>
        </a>
      </span>
    </li>
  );
};

export default FriendProfile;
